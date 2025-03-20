"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
}

export default function PricingCard({
    title,
    price,
    description,
    features,
    popular = false,
}: PricingCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 300 },
            }}
        >
            <Card
                className={`flex flex-col ${
                    popular ? "border-primary shadow-xl shadow-accent" : ""
                }`}
            >
                <CardHeader className="pb-0">
                    {popular && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-2 w-fit">
                                Najpopularniejszy
                            </Badge>
                        </motion.div>
                    )}
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">{price}</span>
                        {title !== "Premium" && (
                            <span className="text-muted-foreground">
                                jednorazowo
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </CardHeader>
                <CardContent className="flex-1">
                    <ul className="grid gap-2 py-4">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Link href="#contact" className="w-full">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                className={cn(
                                    "w-full shadow-lg shadow-transparent transition-all duration-300",
                                    popular && "hover:shadow-primary/30 "
                                )}
                                variant={popular ? "default" : "outline"}
                            >
                                Rozpocznij
                            </Button>
                        </motion.div>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
