import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  business: string
  image: string
}

export default function TestimonialCard({ quote, author, business, image }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-0.5 text-yellow-500">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <blockquote className="text-muted-foreground">"{quote}"</blockquote>
          <div className="flex items-center gap-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={author}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-medium">{author}</div>
              <div className="text-sm text-muted-foreground">{business}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

