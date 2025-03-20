"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface PortfolioCardProps {
    title: string;
    category: string;
    image: string;
    results: string[];
    link: string;
}

export default function PortfolioCard({
    title,
    category,
    image,
    results,
    link,
}: PortfolioCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                transition: {
                    type: "spring",
                    stiffness: 300,
                },
            }}
        >
            <Card className="pt-0 overflow-hidden group">
                <div className="relative">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={title}
                            width={600}
                            height={400}
                            className="object-cover w-full aspect-[4/3]"
                        />
                    </motion.div>
                    <Badge className="absolute top-2 right-2">{category}</Badge>
                </div>
                <CardContent className="p-6 py-0">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <div className="space-y-2">
                            {results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm">{result}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Link
                                href={link}
                                target="_blank"
                                className="flex items-center gap-1 pt-2 text-sm font-medium text-primary"
                            >
                                <span>Sprawdź strone</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                    }}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
