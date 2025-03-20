"use client";

/* eslint-disable @next/next/no-img-element */
//import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn } from "@/lib/animation";
import { Star, UserIcon } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialCardProps {
    quote: string;
    author: string;
    business: string;
    image: string | null;
}

export default function TestimonialCard({
    quote,
    author,
    business,
    image,
}: TestimonialCardProps) {
    return (
        <motion.div variants={fadeIn("up", 0.4)}>
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            }}
                            viewport={{ once: true }}
                            className="flex gap-0.5 text-accent"
                        >
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Star className="w-5 h-5 fill-current" />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground"
                        >
                            &quot;{quote}&quot;
                        </motion.blockquote>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            {image ? (
                                <img
                                    src={image}
                                    alt={author}
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                            ) : (
                                <div className="overflow-hidden rounded-full bg-muted">
                                    <UserIcon
                                        className="object-cover p-1 text-muted-foreground/50"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            )}
                            <div>
                                <div className="font-medium">{author}</div>
                                <div className="text-sm text-muted-foreground">
                                    {business}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
