import { Clock, MessageSquare, Phone } from "lucide-react";
import ContactForm from "../form";

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Kontakt
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Porozmawiajmy o Twoim projekcie
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Umów darmową 30-minutową konsultację, aby omówić cele biznesowe i
              to, jak strona internetowa może pomóc Ci je osiągnąć.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>kontakt@webcraftdesign.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Odpowiedź w ciągu 24 godzin roboczych</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Formularz kontaktowy</h3>
                <p className="text-muted-foreground">
                  Wypełnij poniższy formularz, aby rozpocząć
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
