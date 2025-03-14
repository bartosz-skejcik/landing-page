"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
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
export async function submitToNotion(formData: FormData) {
  // Get the environment variables
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  // Check if environment variables are set
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    console.error("Missing Notion API key or database ID");
    return {
      success: false,
      message: "Server configuration error. Please contact support.",
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
        },
      }),
    });

    const data = await response.json();

    // Check if the request was successful
    if (!response.ok) {
      console.error("Notion API error:", data);
      return {
        success: false,
        message: "Failed to submit form. Please try again later.",
      };
    }

    // Revalidate the page to show updated data if needed
    revalidatePath("/");

    return {
      success: true,
      message: "Form submitted successfully! We will contact you soon.",
    };
  } catch (error) {
    console.error("Error submitting to Notion:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body as FormData;

  try {
    const formData = formDataScheme.parse(body);
    const result = await submitToNotion(formData);

    res.status(result.success ? 201 : 500).json(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      res.status(400).json({ success: false, message: error.message });
    } else {
      console.error(error);
      res
        .status(400)
        .json({ success: false, message: "An unknown error occurred" });
    }
    return;
  }
}
