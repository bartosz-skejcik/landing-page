import FAQAccordion from "@/components/faq-accordion";

function Faq() {
  return (
    <section id="faq" className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Często zadawane pytania
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Proste odpowiedzi na pytania, które możesz mieć
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}

export default Faq;
