import FAQAccordion from "@/components/faq-accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Faq() {
    return (
        <section id="faq" className="py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10">
                            FAQ
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Odpowiedzi na Twoje wątpliwości
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Rozumiemy, że możesz mieć pytania przed podjęciem
                            decyzji. Oto odpowiedzi na najczęstsze z nich.
                        </p>
                    </div>
                </div>
                <div className="max-w-3xl py-12 mx-auto">
                    <FAQAccordion />
                </div>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="mb-6 text-lg">
                        Nadal masz pytania lub jesteś gotowy, aby omówić swój
                        projekt?
                    </p>
                    <Link href="#contact">
                        <Button size="lg">Skontaktuj się teraz</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Faq;
