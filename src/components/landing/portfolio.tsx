import PortfolioCard from "@/components/portfolio-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <section id="portfolio" className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Realne wyniki dla lokalnych firm
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Zobacz, jak pomogliśmy firmom takim jak Twoja powiększyć bazę
              klientów i zwiększyć przychody.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((site, index) => (
            <PortfolioCard
              key={index}
              title={site.title}
              category={site.category}
              image={site.image}
              link={site.link}
              results={site.results}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="#contact">
            <Button size="lg">Porozmawiajmy o Twoim projekcie</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
