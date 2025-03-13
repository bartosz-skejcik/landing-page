import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Strony internetowe dla małych firm lokalnych
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Strony internetowe, które pracują tak ciężko jak Ty
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tworzymy strony internetowe, które pomagają lokalnym firmom
              nawiązywać kontakt z większą liczbą klientów i rozwijać się. Bez
              żargonu technicznego, bez zbędnych funkcji — tylko strony, które
              przynoszą realne wyniki.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button size="lg">Umów darmową konsultację</Button>
              </Link>
              <Link href="#portfolio">
                <Button size="lg" variant="outline">
                  Zobacz nasze projekty
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">
                        Strony ładujące się w mniej niż 2 sekundy
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">
                        Responsywne projekty, które dobrze wyglądają wszędzie
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-4 pt-8">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">
                        Podstawy SEO zawarte w każdej stronie
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">
                        Szkolenie, dzięki któremu sam aktualizujesz treści
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
