import PricingCard from "@/components/pricing-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pricing = [
    {
        title: "Podstawowy",
        price: "1 500 zł",
        description: "Idealny dla nowych firm lub tych z prostymi potrzebami",
        features: [
            "Responsywna strona 3-5 stron",
            "Formularz kontaktowy",
            "Integracja z Google Maps",
            "Podstawowa konfiguracja SEO",
            "Responsywny design",
            "Szkolenie z zarządzania treścią",
            "60 zł/miesiąc hosting i utrzymanie",
        ],
        popular: false,
    },
    {
        title: "Rozwojowy",
        price: "3 500 zł",
        description:
            "Dla ustabilizowanych firm gotowych rozszerzyć swoją obecność online",
        features: [
            "Responsywna strona 5-8 stron",
            "Pomoc w tworzeniu treści",
            "Pomoc w wyborze zdjęć",
            "Zaawansowane formularze kontaktowe",
            "Konfiguracja Google Analytics",
            "Integracja z mediami społecznościowymi",
            "Optymalizacja lokalnego SEO",
            "100 zł/miesiąc hosting i utrzymanie",
        ],
        popular: true,
    },
    {
        title: "Premium",
        price: "5 000 zł",
        description:
            "Kompleksowe rozwiązanie dla firm z konkretnymi wymaganiami",
        features: [
            "Niestandardowa strona 8+ stron",
            "Funkcjonalność e-commerce",
            "System rezerwacji spotkań",
            "Niestandardowa integracja bazy danych",
            "Zaawansowana strategia SEO",
            "Tworzenie treści",
            "Optymalizacja konwersji",
            "170 zł/miesiąc hosting i utrzymanie",
        ],
        popular: false,
    },
];

function Pricing() {
    return (
        <section id="pricing" className="py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10">
                            Inwestycja w rozwój
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Zwrot z inwestycji, nie koszt
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Strona internetowa to nie wydatek, ale inwestycja,
                            która zwraca się w postaci nowych klientów. Wybierz
                            pakiet, który przyniesie Ci najlepsze rezultaty.
                        </p>
                    </div>
                </div>
                <div className="grid max-w-5xl grid-cols-1 gap-6 py-12 mx-auto md:grid-cols-3">
                    {pricing.map((price, index) => (
                        <PricingCard
                            key={index}
                            title={price.title}
                            price={price.price}
                            description={price.description}
                            features={price.features}
                            popular={price.popular}
                        />
                    ))}
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="mb-6 text-muted-foreground">
                        Wszystkie pakiety obejmują responsywny design,
                        podstawowe SEO i szkolenie umożliwiające samodzielną
                        aktualizację treści. Miesięczne opłaty pokrywają
                        hosting, aktualizacje zabezpieczeń, kopie zapasowe i
                        podstawowe wsparcie.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-medium">
                            Nie wiesz, który pakiet najszybciej zwróci Twoją
                            inwestycję?
                        </p>
                        <Link href="#contact">
                            <Button size="lg">
                                Skonsultuj się za darmo i wybierz najlepszą
                                opcję
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
