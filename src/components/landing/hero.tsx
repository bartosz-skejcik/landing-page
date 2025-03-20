"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import AnimatedSection from "../animated-section";
import { motion } from "motion/react";
import { fadeIn, textVariant, zoomIn } from "@/lib/animation";

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
        <AnimatedSection className="py-12 md:py-24 lg:py-32 bg-muted/20">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10"
                        >
                            Zwiększ sprzedaż dzięki profesjonalnej stronie
                        </motion.div>
                        <motion.h1
                            variants={textVariant(0.3)}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Pozyskaj więcej klientów już w ciągu 30 dni
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Nie trać potencjalnych klientów przez przestarzałą
                            lub nieatrakcyjną stronę. Projektujemy strony, które
                            zamieniają odwiedzających w klientów - bez
                            technicznych komplikacji i zbędnych funkcji. Dołącz
                            do firm, które zwiększyły swoje przychody dzięki
                            naszym rozwiązaniom.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            className="flex gap-2 flex-col-reverse min-[400px]:flex-row pt-2 flex-wrap"
                        >
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
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", 0.6)}
                            className="flex flex-col items-center gap-2 max-w-[600px] pt-5"
                        >
                            <Separator />
                            <div className="flex flex-row items-center justify-start w-full py-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn(
                                            "up",
                                            0.6 + index * 0.1
                                        )}
                                        className="flex flex-col items-start gap-1 mr-auto"
                                    >
                                        <div className="text-5xl font-bold text-primary">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {stat.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <Separator />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={zoomIn(0.5, 0.8)}
                        className="mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <motion.div variants={fadeIn("up", 0.7)}>
                                        <Card className="py-0 md:py-3 h-fit">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <CheckCircle className="w-20 h-20 lg:h-5 lg:w-5 text-primary" />
                                                <div className="text-sm font-medium">
                                                    Błyskawiczne ładowanie - 2x
                                                    szybciej niż konkurencja
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                    <motion.div variants={fadeIn("up", 0.8)}>
                                        <Card className="py-0 md:py-3 h-fit">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <CheckCircle className="w-20 h-20 lg:h-5 lg:w-5 text-primary" />
                                                <div className="text-sm font-medium">
                                                    Perfekcyjny wygląd na
                                                    telefonach - tam szuka Cię
                                                    70% klientów
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col gap-4 pt-8">
                                    <motion.div variants={fadeIn("up", 0.9)}>
                                        <Card className="py-0 md:py-3 h-fit">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <CheckCircle className="w-20 h-20 lg:h-5 lg:w-5 text-primary" />
                                                <div className="text-sm font-medium">
                                                    Pozycjonowanie SEO, które
                                                    przyciąga klientów 24/7
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                    <motion.div variants={fadeIn("up", 1.0)}>
                                        <Card className="py-0 md:py-3 h-fit">
                                            <CardContent className="flex items-center gap-4 p-4">
                                                <CheckCircle className="w-20 h-20 lg:h-5 lg:w-5 text-primary" />
                                                <div className="text-sm font-medium">
                                                    Pełna kontrola nad stroną
                                                    bez wiedzy technicznej
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Hero;
