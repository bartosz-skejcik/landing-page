"use client";

import { Clock, MessageSquare, Phone } from "lucide-react";
import ContactForm from "../form";
import AnimatedSection from "@/components/animated-section";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";

const contacts = [
    {
        icon: Phone,
        text: "+48 798 231 685",
    },
    {
        icon: MessageSquare,
        text: "luki.borkowski@wp.pl",
    },
    {
        icon: Clock,
        text: "Odpowiedź w ciągu 24 godzin roboczych",
    },
];

function Contact() {
    return (
        <AnimatedSection id="contact" className="py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10"
                        >
                            Kontakt
                        </motion.div>
                        <motion.h2
                            variants={fadeIn("right", 0.3)}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Porozmawiajmy o Twoim projekcie
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("right", 0.4)}
                            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Umów darmową 30-minutową konsultację, aby omówić
                            cele biznesowe i to, jak strona internetowa może
                            pomóc Ci je osiągnąć.
                        </motion.p>
                        <div className="space-y-4">
                            {contacts.map((contact, index) => (
                                <motion.div
                                    variants={fadeIn(
                                        "right",
                                        0.5 + (index + 1) * 0.1
                                    )}
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <contact.icon className="w-5 h-5 text-primary" />
                                    <span>{contact.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        variants={fadeIn(
                            "up",
                            // get the last index of the contacts array, multiply by 0.1 and add 0.5
                            0.5 + (contacts.length - 1) * 0.1 + 0.5
                        )}
                        className="border rounded-lg shadow-sm bg-card text-card-foreground"
                    >
                        <div className="p-6 space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">
                                    Formularz kontaktowy
                                </h3>
                                <p className="text-muted-foreground">
                                    Wypełnij poniższy formularz, aby rozpocząć
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Contact;
