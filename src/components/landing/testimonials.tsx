"use client";

import { motion } from "motion/react";
import TestimonialCard from "@/components/testimonial-card";
import AnimatedSection from "../animated-section";
import { fadeIn, textVariant } from "@/lib/animation";

const testimonials = [
    {
        quote: "Jako właściciel AuthorityCars, z przyjemnością rekomenduję chłopaków z VarsIT. Stworzona przez nich strona internetowa jest nowoczesna i intuicyjna, co pozytywnie wpływa na naszą działalność. Profesjonalizm zespołu VarsIT zasługuje na najwyższe uznanie",
        author: "Szymon Skibniewski",
        business: "AuthorityCars",
        image: null,
    },
];

function Testimonials() {
    return (
        <AnimatedSection id="testimonials" className="py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <motion.div
                            variants={fadeIn("down", 0.2)}
                            className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10"
                        >
                            Opinie
                        </motion.div>
                        <motion.h2
                            variants={textVariant(0.3)}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Co mówią właściciele lokalnych firm
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Posłuchaj opinii innych właścicieli małych firm z
                            naszej społeczności
                        </motion.p>
                    </div>
                </div>
                <div className="grid max-w-5xl grid-cols-1 gap-6 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            business={testimonial.business}
                            image={testimonial.image}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Testimonials;
