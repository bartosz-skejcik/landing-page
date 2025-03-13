import TestimonialCard from "@/components/testimonial-card";

function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Opinie
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Co mówią właściciele lokalnych firm
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Posłuchaj opinii innych właścicieli małych firm z naszej
              społeczności
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Współpraca z WebCraft to najlepsza decyzja biznesowa, jaką podjęłam w tym roku. Strona mojej piekarni przyciąga teraz nowych klientów każdego tygodnia, a ja mogę sama aktualizować sezonowe menu."
            author="Sarah Johnson"
            business="Piekarnia przy Głównej"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="Wahałem się z inwestycją w stronę internetową, ale zwrot był niesamowity. Sam system rezerwacji zaoszczędził mi godziny rozmów telefonicznych każdego tygodnia."
            author="Michael Rodriguez"
            business="Zielony Kciuk Ogrodnictwo"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="Jako dentysta potrzebowałam strony, która sprawi, że pacjenci poczują się komfortowo i będą dobrze poinformowani. Dokładnie to otrzymałam, plus łatwy sposób na umawianie wizyt dla nowych pacjentów."
            author="Dr Emily Chen"
            business="Klinika Dentystyczna Riverside"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="Nasza księgarnia w końcu ma obecność online, która oddaje urok naszego fizycznego sklepu. System zamówień online otworzył zupełnie nowe źródło przychodów."
            author="David Wilson"
            business="Księgarnia na Rogu"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="System rezerwacji zajęć całkowicie zmienił funkcjonowanie naszego studia. Koniec z arkuszami kalkulacyjnymi i zagubionymi e-mailami. Nasi klienci też to uwielbiają!"
            author="Jessica Martinez"
            business="Studio Fitness Miejskie"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="Jako prawnicy potrzebowaliśmy strony, która wyrażałaby profesjonalizm, będąc jednocześnie przystępną. Efekt przekroczył nasze oczekiwania i przyniósł wartościowe kontakty."
            author="Robert Thompson"
            business="Kancelaria Prawna Harbor"
            image="/placeholder.svg?height=80&width=80"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
