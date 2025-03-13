import PricingCard from "@/components/pricing-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Przejrzyste ceny
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Opcje inwestycji
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Jasne ceny bez ukrytych opłat czy niespodzianek
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <PricingCard
            title="Podstawowy"
            price="4 500 zł"
            description="Idealny dla nowych firm lub tych z prostymi potrzebami"
            features={[
              "Responsywna strona 3-5 stron",
              "Formularz kontaktowy",
              "Integracja z Google Maps",
              "Podstawowa konfiguracja SEO",
              "Responsywny design",
              "Szkolenie z zarządzania treścią",
              "60 zł/miesiąc hosting i utrzymanie",
            ]}
            popular={false}
          />
          <PricingCard
            title="Rozwojowy"
            price="9 000 zł"
            description="Dla ustabilizowanych firm gotowych rozszerzyć swoją obecność online"
            features={[
              "Responsywna strona 5-8 stron",
              "Pomoc w tworzeniu treści",
              "Pomoc w wyborze zdjęć",
              "Zaawansowane formularze kontaktowe",
              "Konfiguracja Google Analytics",
              "Integracja z mediami społecznościowymi",
              "Optymalizacja lokalnego SEO",
              "100 zł/miesiąc hosting i utrzymanie",
            ]}
            popular={true}
          />
          <PricingCard
            title="Premium"
            price="13 500 zł+"
            description="Kompleksowe rozwiązanie dla firm z konkretnymi wymaganiami"
            features={[
              "Niestandardowa strona 8+ stron",
              "Funkcjonalność e-commerce",
              "System rezerwacji spotkań",
              "Niestandardowa integracja bazy danych",
              "Zaawansowana strategia SEO",
              "Tworzenie treści",
              "Optymalizacja konwersji",
              "170 zł/miesiąc hosting i utrzymanie",
            ]}
            popular={false}
          />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground mb-6">
            Wszystkie pakiety obejmują responsywny design, podstawowe SEO i
            szkolenie umożliwiające samodzielną aktualizację treści. Miesięczne
            opłaty pokrywają hosting, aktualizacje zabezpieczeń, kopie zapasowe
            i podstawowe wsparcie.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <p className="font-medium">
              Nie wiesz, która opcja jest dla Ciebie odpowiednia?
            </p>
            <Link href="#contact">
              <Button>Umów darmową konsultację</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
