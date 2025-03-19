import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Portfolio from "@/components/landing/portfolio";
import Process from "@/components/landing/process";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import Faq from "@/components/landing/faq";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center mx-auto w-full min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Portfolio />
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
