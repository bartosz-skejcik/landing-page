import { Button } from "@/components/ui/button";
import { Clock, MessageSquare, Phone } from "lucide-react";

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
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Imię
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Jan"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nazwisko
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Kowalski"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="business-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nazwa firmy
                  </label>
                  <input
                    id="business-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nazwa Twojej Firmy"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="ty@przyklad.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="project-details"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Opowiedz mi o swoim projekcie
                  </label>
                  <textarea
                    id="project-details"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Jakie są Twoje cele biznesowe dla tej strony internetowej?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Jaki jest Twój harmonogram?
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Wybierz harmonogram</option>
                    <option value="urgent">Jak najszybciej</option>
                    <option value="1month">W ciągu 1 miesiąca</option>
                    <option value="3months">W ciągu 3 miesięcy</option>
                    <option value="noRush">Bez pośpiechu</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Zakres budżetu
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Wybierz zakres budżetu</option>
                    <option value="starter">4 000 - 8 000 zł</option>
                    <option value="growth">8 000 - 13 000 zł</option>
                    <option value="premium">13 000+ zł</option>
                    <option value="unsure">Jeszcze nie wiem</option>
                  </select>
                </div>
                <Button className="w-full" size="lg">
                  Umów konsultację
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
