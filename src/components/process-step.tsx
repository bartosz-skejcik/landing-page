import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

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
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/80 text-primary-foreground">
            {number}
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
