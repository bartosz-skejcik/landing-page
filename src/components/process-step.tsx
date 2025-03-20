"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { motion } from "motion/react";

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    duration: string;
}

export default function ProcessStep({
    number,
    title,
    description,
    duration,
}: ProcessStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card>
                <CardContent className="p-6">
                    <div className="flex gap-4">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                delay: 0.2,
                            }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-primary/80 text-primary-foreground"
                        >
                            {number}
                        </motion.div>
                        <div className="space-y-2">
                            <h3 className="font-bold">{title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{duration}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
