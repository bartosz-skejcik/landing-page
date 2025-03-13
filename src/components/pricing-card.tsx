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
    <Card
      className={`flex flex-col ${popular ? "border-primary shadow-lg" : ""}`}
    >
      <CardHeader className="pb-0">
        {popular && <Badge className="w-fit mb-2">Najpopularniejszy</Badge>}
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {title !== "Premium" && (
            <span className="text-muted-foreground">jednorazowo</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="grid gap-2 py-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="#contact" className="w-full">
          <Button className="w-full" variant={popular ? "default" : "outline"}>
            Rozpocznij
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
