import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "../ui/separator";

const stats = [
    {
        name: "Zadowolonych klientów",
        value: "10+",
    },
    {
        name: "Zrealizowanych projektów",
        value: "20+",
    },
    {
        name: "Wskaźnik satysfakcji",
        value: "98%",
    },
];

function Hero() {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10">
                            Zwiększ sprzedaż dzięki profesjonalnej stronie
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Pozyskaj więcej klientów już w ciągu 30 dni
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Nie trać potencjalnych klientów przez przestarzałą
                            lub nieatrakcyjną stronę. Projektujemy strony, które
                            zamieniają odwiedzających w klientów - bez
                            technicznych komplikacji i zbędnych funkcji. Dołącz
                            do firm, które zwiększyły swoje przychody dzięki
                            naszym rozwiązaniom.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-2">
                            <Link href="#contact">
                                <Button size="lg">
                                    Zdobądź darmową wycenę teraz
                                </Button>
                            </Link>
                            <Link href="#portfolio">
                                <Button size="lg" variant="outline">
                                    Zobacz nasze realizacje
                                </Button>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center gap-2 max-w-[600px] pt-5">
                            <Separator />
                            <div className="flex flex-row items-center justify-start w-full py-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-start gap-1 mr-auto"
                                    >
                                        <div className="text-5xl font-bold text-primary">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {stat.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Separator />
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <Card>
                                        <CardContent className="flex items-center gap-4 p-4">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <div className="text-sm font-medium">
                                                Błyskawiczne ładowanie - 2x
                                                szybciej niż konkurencja
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="flex items-center gap-4 p-4">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <div className="text-sm font-medium">
                                                Perfekcyjny wygląd na
                                                telefonach, gdzie szuka 70%
                                                klientów
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex flex-col gap-4 pt-8">
                                    <Card>
                                        <CardContent className="flex items-center gap-4 p-4">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <div className="text-sm font-medium">
                                                Pozycjonowanie SEO, które
                                                przyciąga klientów 24/7
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="flex items-center gap-4 p-4">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <div className="text-sm font-medium">
                                                Pełna kontrola nad stroną bez
                                                wiedzy technicznej
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
