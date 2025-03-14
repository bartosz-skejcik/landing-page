/* eslint-disable @next/next/no-img-element */
//import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, UserIcon } from "lucide-react";

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
  console.log(image);
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-0.5 text-accent">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <blockquote className="text-muted-foreground">
            &quot;{quote}&quot;
          </blockquote>
          <div className="flex items-center gap-4">
            {image ? (
              <img
                src={image}
                alt={author}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="bg-muted rounded-full overflow-hidden">
                <UserIcon
                  className="object-cover text-muted-foreground/50 p-1"
                  width={40}
                  height={40}
                />
              </div>
            )}
            <div>
              <div className="font-medium">{author}</div>
              <div className="text-sm text-muted-foreground">{business}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
