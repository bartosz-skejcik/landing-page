"use client";

import PortfolioCard from "@/components/portfolio-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "../animated-section";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "@/lib/animation";

const sites = [
    {
        title: "Authority Cars",
        category: "Motoryzacja",
        link: "https://authoritycars.pl",
        image: "/sites/authoritycars.pl.png",
        results: [
            "System zarządzania klientami zaoszczędził 15 godz./tydzień",
            "43% więcej zamówień online",
            "Baza mailingowa wzrosła o 300%",
        ],
    },
];

function Portfolio() {
    return (
        <AnimatedSection id="portfolio" className="py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <motion.div
                            variants={fadeIn("down", 0.2)}
                            className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10"
                        >
                            Nasze sukcesy
                        </motion.div>
                        <motion.h2
                            variants={textVariant(0.3)}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Sprawdzone rezultaty, które możesz osiągnąć
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto"
                        >
                            Te firmy już zwiększyły swoje przychody dzięki
                            naszym stronom. Każdy dzień bez profesjonalnej
                            strony to utracone zamówienia i klienci, którzy
                            trafiają do konkurencji.
                        </motion.p>
                    </div>
                </div>
                <div className="grid max-w-5xl grid-cols-1 gap-6 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
                    {sites.map((site, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.5 + index * 0.1)}
                        >
                            <PortfolioCard
                                title={site.title}
                                category={site.category}
                                image={site.image}
                                link={site.link}
                                results={site.results}
                            />
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    variants={fadeIn("up", 0.7)}
                    className="flex justify-center"
                >
                    <Link href="#contact">
                        <Button size="lg" className="font-medium">
                            Sprawdź, ilu klientów możesz zyskać
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}

export default Portfolio;
