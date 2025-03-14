import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

const formDataScheme = z.object({
  firstName: z.string({ message: "Imię jest wymagane" }),
  lastName: z.string({ message: "Nazwisko jest wymagane" }),
  businessName: z.string({ message: "Nazwa firmy jest wymagana" }),
  email: z.string({ message: "Email jest wymagany" }),
  phone: z.string({ message: "Numer telefonu jest wymagany" }),
  projectDetails: z.string({ message: "Szczegóły projektu są wymagane" }),
  timeline: z.string({ message: "Okres realizacji jest wymagany" }),
  budget: z.string({ message: "Budżet jest wymagany" }),
});

// Define the type for the form data
export type FormData = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  projectDetails: string;
  timeline: string;
  budget: string;
};

/**
 * Server action to submit form data to Notion database
 */
async function submitToNotion(formData: FormData) {
  // Get the environment variables
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  // Check if environment variables are set
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    console.error("Missing Notion API key or database ID");
    return {
      success: false,
      message:
        "Wystąpił błąd konfiguracji serwera. Skontaktuj się z pomocą techniczną.",
    };
  }

  try {
    // Prepare the request to the Notion API
    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28", // Use the latest Notion API version
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          // Map form fields to your Notion database properties
          // Adjust property names and types to match your Notion database structure
          Name: {
            title: [
              {
                text: {
                  content:
                    `${formData.firstName} ${formData.lastName}`.trim() ||
                    "Unknown",
                },
              },
            ],
          },
          Business: {
            rich_text: [
              {
                text: {
                  content: formData.businessName || "Not provided",
                },
              },
            ],
          },
          "Contact Email": {
            email: formData.email || "",
          },
          "Contact Phone Number": {
            phone_number: formData.phone || "",
          },
          "Project Details": {
            rich_text: [
              {
                text: {
                  content: formData.projectDetails || "Not provided",
                },
              },
            ],
          },
          Timeline: {
            select: formData.timeline
              ? {
                  name: formData.timeline,
                }
              : null,
          },
          "Budget Range": {
            select: formData.budget
              ? {
                  name: formData.budget,
                }
              : null,
          },
          Status: {
            status: {
              name: "New Lead",
            },
          },
          "Submission Date": {
            date: {
              start: new Date().toISOString().split("T")[0],
            },
          },
        },
      }),
    });

    const data = await response.json();

    // Check if the request was successful
    if (!response.ok) {
      console.error("Notion API error:", data);
      return {
        success: false,
        message: "Nie udało się wysłać formularza. Spróbuj ponownie później.",
      };
    }

    // Revalidate the page to show updated data if needed
    revalidatePath("/");

    return {
      success: true,
      message:
        "Formularz został wysłany pomyślnie! Skontaktujemy się z Tobą wkrótce.",
    };
  } catch (error) {
    console.error("Error submitting to Notion:", error);
    return {
      success: false,
      message: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.",
    };
  }
}

export async function POST(req: Request) {
  // CORS implementation - check the origin
  const headersList = await headers();
  const origin = headersList.get("origin");
  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;

  // If no origin or allowed origin is not set, reject the request
  if (!origin || !allowedOrigin) {
    return NextResponse.json(
      {
        success: false,
        message: "Błąd CORS: Origin nie jest dozwolony",
      },
      { status: 403 },
    );
  }

  // Normalize origins for comparison (removing trailing slashes)
  const normalizedOrigin = origin.replace(/\/$/, "");
  const normalizedAllowedOrigin = allowedOrigin.replace(/\/$/, "");

  // Check if the origin is allowed
  if (normalizedOrigin !== normalizedAllowedOrigin) {
    return NextResponse.json(
      {
        success: false,
        message: "Błąd CORS: Origin nie jest dozwolony",
      },
      { status: 403 },
    );
  }

  const headersToAdd = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return NextResponse.next({
      status: 200,
      headers: headersToAdd,
    });
  }

  // Continue with the original logic
  const body = (await req.json()) as FormData;

  try {
    const formData = formDataScheme.parse(body);
    const result = await submitToNotion(formData);

    return NextResponse.json(result, {
      status: result.success ? 201 : 500,
      headers: headersToAdd,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400, headers: headersToAdd },
      );
    } else {
      console.error(error);
      return NextResponse.json(
        {
          success: false,
          message: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.",
        },
        { status: 500, headers: headersToAdd },
      );
    }
  }
}
