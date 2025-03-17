import { Clock, MessageSquare, Phone } from "lucide-react";
import ContactForm from "../form";

function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 bg-muted/50">
            <div className="container px-4 mx-auto md:px-6">
                <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary/10">
                            Kontakt
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Porozmawiajmy o Twoim projekcie
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Umów darmową 30-minutową konsultację, aby omówić
                            cele biznesowe i to, jak strona internetowa może
                            pomóc Ci je osiągnąć.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+48 798 231 685</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary" />
                                <span>luki.borkowski@wp.pl</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>
                                    Odpowiedź w ciągu 24 godzin roboczych
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg shadow-sm bg-card text-card-foreground">
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
