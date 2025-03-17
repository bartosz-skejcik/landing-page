import ProcessStep from "@/components/process-step";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Process() {
    return (
        <section id="process" className="py-12 md:py-24 bg-muted/20">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10">
                            Współpraca bez stresu
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Prosta droga do strony, która przynosi klientów
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Zero technicznych zawiłości. Zero frustracji. Tylko
                            przejrzysty proces, który szybko prowadzi do
                            rezultatów bez angażowania Twojego cennego czasu.
                        </p>
                    </div>
                </div>
                <div className="grid max-w-5xl gap-8 py-12 mx-auto">
                    <ProcessStep
                        number="1"
                        title="Rozmowa wstępna"
                        description="Omówimy cele Twojej firmy, docelowych klientów i to, co chcesz osiągnąć. Bez technicznych szczegółów—tylko zrozumienie, jak pomóc Ci przyciągnąć więcej klientów."
                        duration="30-45 minut"
                    />
                    <ProcessStep
                        number="2"
                        title="Strategia i planowanie"
                        description="Przygotuję dopasowaną propozycję z konkretnymi rekomendacjami, które zwiększą Twoją widoczność online i przyciągną więcej potencjalnych klientów."
                        duration="3-5 dni roboczych"
                    />
                    <ProcessStep
                        number="3"
                        title="Projekt i rozwój"
                        description="Podczas gdy Ty skupiasz się na prowadzeniu biznesu, ja stworzę stronę, która będzie pracować na Twój sukces, regularnie informując Cię o postępach."
                        duration="2-4 tygodnie"
                    />
                    <ProcessStep
                        number="4"
                        title="Przegląd i udoskonalenie"
                        description="Przejrzysz stronę i wspólnie dopracujemy każdy szczegół, aby mieć pewność, że strona idealnie reprezentuje Twoją firmę i przyciąga klientów."
                        duration="1 tydzień"
                    />
                    <ProcessStep
                        number="5"
                        title="Uruchomienie i szkolenie"
                        description="Twoja strona zaczyna przynosić rezultaty! Pokażę Ci, jak łatwo możesz samodzielnie aktualizować treści - bez wiedzy technicznej i bez dodatkowych kosztów."
                        duration="1-2 dni"
                    />
                    <ProcessStep
                        number="6"
                        title="Wsparcie bieżące"
                        description="Twoja strona będzie bezpieczna, szybka i aktualna dzięki mojemu wsparciu. Skupiaj się na biznesie, a ja zadbam o Twoją obecność online."
                        duration="Według potrzeb"
                    />
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="#contact">
                        <Button size="lg">Rozpocznij proces już dziś</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Process;
