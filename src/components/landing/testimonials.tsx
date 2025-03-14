import TestimonialCard from "@/components/testimonial-card";

const testimonials = [
  {
    quote:
      "Jako właściciel AuthorityCars, z przyjemnością rekomenduję chłopaków z VarsIT. Stworzona przez nich strona internetowa jest nowoczesna i intuicyjna, co pozytywnie wpływa na naszą działalność. Profesjonalizm zespołu VarsIT zasługuje na najwyższe uznanie",
    author: "Szymon Skibniewski",
    business: "AuthorityCars",
    image: null,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              Opinie
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Co mówią właściciele lokalnych firm
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Posłuchaj opinii innych właścicieli małych firm z naszej
              społeczności
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              business={testimonial.business}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
