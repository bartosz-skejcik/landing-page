import PortfolioCard from "@/components/portfolio-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Realne wyniki dla lokalnych firm
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Zobacz, jak pomogliśmy firmom takim jak Twoja powiększyć bazę
              klientów i zwiększyć przychody.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard
            title="Piekarnia przy Głównej"
            category="Gastronomia"
            image="/placeholder.svg?height=400&width=600"
            results={[
              "43% więcej zamówień online",
              "Wyróżnienie w lokalnej gazecie",
              "Podwojenie rezerwacji weekendowych",
            ]}
          />
          <PortfolioCard
            title="Zielony Kciuk Ogrodnictwo"
            category="Usługi domowe"
            image="/placeholder.svg?height=400&width=600"
            results={[
              "67% więcej zapytań o wycenę",
              "System rezerwacji zaoszczędził 15 godz./tydzień",
              "Rozszerzenie obszaru usług",
            ]}
          />
          <PortfolioCard
            title="Klinika Dentystyczna Riverside"
            category="Opieka zdrowotna"
            image="/placeholder.svg?height=400&width=600"
            results={[
              "28% więcej nowych pacjentów",
              "Uproszczenie systemu rezerwacji wizyt",
              "Lepsza edukacja pacjentów",
            ]}
          />
          <PortfolioCard
            title="Księgarnia na Rogu"
            category="Handel detaliczny"
            image="/placeholder.svg?height=400&width=600"
            results={[
              "Utworzenie sklepu online z 200+ produktami",
              "Integracja z systemem sprzedażowym",
              "Baza mailingowa wzrosła o 300%",
            ]}
          />
          <PortfolioCard
            title="Studio Fitness Miejskie"
            category="Zdrowie i fitness"
            image="/placeholder.svg?height=400&width=600"
            results={[
              "Rezerwacje zajęć wzrosły o 52%",
              "Zwiększenie liczby zapisów członkowskich",
              "Zmniejszenie liczby nieobecności dzięki przypomnieniom",
            ]}
          />
          <PortfolioCard
            title="Kancelaria Prawna Harbor"
            category="Usługi profesjonalne"
            image="/placeholder.svg?height=400&width=600"
            results={[
              "Prośby o konsultacje wzrosły o 35%",
              "Ulepszone materiały edukacyjne dla klientów",
              "Wzmocnienie profesjonalnego wizerunku",
            ]}
          />
        </div>
        <div className="flex justify-center">
          <Link href="#contact">
            <Button size="lg">Porozmawiajmy o Twoim projekcie</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
