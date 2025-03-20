"use client";

import { motion } from "motion/react";
import FAQAccordion from "@/components/faq-accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "../animated-section";
import { fadeIn, textVariant } from "@/lib/animation";

function Faq() {
    return (
        <AnimatedSection id="faq" className="py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10"
                        >
                            FAQ
                        </motion.div>
                        <motion.h2
                            variants={textVariant(0.3)}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Odpowiedzi na Twoje wątpliwości
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Rozumiemy, że możesz mieć pytania przed podjęciem
                            decyzji. Oto odpowiedzi na najczęstsze z nich.
                        </motion.p>
                    </div>
                </div>
                <div className="grid grid-cols-1 py-12 mx-auto w-5xl">
                    <FAQAccordion />
                </div>
                <div className="max-w-5xl mx-auto text-center">
                    <p className="mb-6 text-lg">
                        Nadal masz pytania lub jesteś gotowy, aby omówić swój
                        projekt?
                    </p>
                    <Link href="#contact">
                        <Button size="lg">Skontaktuj się teraz</Button>
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Faq;
