"use client";

import { FormData as FormDataType } from "@/api/contact/route";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { LoaderCircleIcon } from "lucide-react";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);

    const formValues: FormDataType = {
      firstName: (formData.get("first-name") as string) || "",
      lastName: (formData.get("last-name") as string) || "",
      businessName: (formData.get("business-name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      projectDetails: (formData.get("project-details") as string) || "",
      timeline: (formData.get("timeline") as string) || "",
      budget: (formData.get("budget") as string) || "",
    };

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!resp.ok) {
        toast("Error", {
          description: "Something went wrong. Please try again.",
        });
        console.log("Form submission error:", resp.statusText);
        return;
      }

      const result = await resp.json();

      toast(result.success ? "Success!" : "Error", {
        description: result.message,
      });

      if (result.success) {
        // Reset form on success
        (document.getElementById("contact-form") as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast("Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    console.log(isSubmitting);
  }, [isSubmitting]);

  return (
    <form id="contact-form" className="space-y-4" action={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">Imię</Label>
          <input
            required
            id="first-name"
            name="first-name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Jan"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Nazwisko</Label>
          <input
            required
            id="last-name"
            name="last-name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Kowalski"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="business-name">Nazwa firmy</Label>
        <input
          required
          id="business-name"
          name="business-name"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Nazwa Twojej Firmy"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <input
          required
          id="email"
          name="email"
          type="email"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="ty@przyklad.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <input
          required
          id="phone"
          name="phone"
          type="tel"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="(555) 123-4567"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="project-details">Opowiedz mi o swoim projekcie</Label>
        <textarea
          required
          id="project-details"
          name="project-details"
          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Jakie są Twoje cele biznesowe dla tej strony internetowej?"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="timeline">Jaki jest Twój harmonogram?</Label>
        <select
          required
          id="timeline"
          name="timeline"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Wybierz harmonogram</option>
          <option value="As soon as possible">Jak najszybciej</option>
          <option value="Within 1 month">W ciągu 1 miesiąca</option>
          <option value="Within 3 months">W ciągu 3 miesięcy</option>
          <option value="No rush">Bez pośpiechu</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="budget">Zakres budżetu</Label>
        <select
          required
          id="budget"
          name="budget"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Wybierz zakres budżetu</option>
          <option value="1000 - 2000">1 000 - 2 000 zł</option>
          <option value="2000 - 3500">2000 - 3500 zł</option>
          <option value="3500+">3 500+ zł</option>
          <option value="Not sure yet">Jeszcze nie wiem</option>
        </select>
      </div>
      <Button
        className="w-full disabled:opacity-60"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting && <LoaderCircleIcon className="animate-spin mr-2" />}
        {isSubmitting ? "Umawianie konsultacji..." : "Umów konsultację"}
      </Button>
    </form>
  );
}

export default ContactForm;
