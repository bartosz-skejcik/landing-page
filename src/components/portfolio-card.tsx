import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

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
    <Card className="overflow-hidden group pt-0">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardContent className="p-6 py-0">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{result}</span>
              </div>
            ))}
          </div>
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 text-primary font-medium text-sm pt-2"
          >
            <span>Sprawdź strone</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
