import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-bold">VarsIT</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Portfolio
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Proces
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Cennik
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Opinie
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:block">
            <Button>Skontaktuj się</Button>
          </Link>
          <Link href="tel:+15551234567" className="md:hidden">
            <Button size="icon" variant="ghost">
              <Phone className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
