"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { staggerContainer } from "@/lib/animation";

interface AnimatedSectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimatedSection({
    id,
    children,
    className,
    delay = 0.1,
}: AnimatedSectionProps) {
    return (
        <motion.section
            id={id}
            variants={staggerContainer(0.1, delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
