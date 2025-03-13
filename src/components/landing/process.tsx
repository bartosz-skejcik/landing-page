import ProcessStep from "@/components/process-step";

function Process() {
  return (
    <section id="process" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Mój proces
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Jak będziemy współpracować
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Jasne, współpracujące podejście skupione na celach Twojej firmy
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          <ProcessStep
            number="1"
            title="Rozmowa wstępna"
            description="Omówimy cele Twojej firmy, docelowych klientów i to, co chcesz osiągnąć dzięki stronie internetowej. Bez technicznych szczegółów—tylko zrozumienie Twoich potrzeb."
            duration="30-45 minut"
          />
          <ProcessStep
            number="2"
            title="Strategia i planowanie"
            description="Na podstawie naszej rozmowy przygotuję propozycję z rekomendacjami, harmonogramem i opcjami cenowymi dostosowanymi do Twoich konkretnych potrzeb i budżetu."
            duration="3-5 dni roboczych"
          />
          <ProcessStep
            number="3"
            title="Projekt i rozwój"
            description="Po zatwierdzeniu, zbuduję Twoją stronę z regularnymi aktualizacjami, aby upewnić się, że spełnia Twoją wizję i wymagania biznesowe."
            duration="2-4 tygodnie"
          />
          <ProcessStep
            number="4"
            title="Przegląd i udoskonalenie"
            description="Przejrzysz stronę i poprosisz o wszelkie poprawki przed finalizacją wszystkiego i przygotowaniem do uruchomienia."
            duration="1 tydzień"
          />
          <ProcessStep
            number="5"
            title="Uruchomienie i szkolenie"
            description="Twoja strona jest już aktywna! Zapewnię szkolenie, abyś mógł samodzielnie aktualizować treści i zrozumieć, jak dbać o swoją stronę."
            duration="1-2 dni"
          />
          <ProcessStep
            number="6"
            title="Wsparcie bieżące"
            description="Oferuję różne opcje wsparcia, aby Twoja strona była bezpieczna, aktualna i działała dobrze. Bez konieczności długoterminowych umów."
            duration="Według potrzeb"
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
