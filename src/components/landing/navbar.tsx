import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex items-center justify-between h-16 px-3 mx-auto lg:px-6">
                <Link href="/#" className="flex items-center gap-2">
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="rounded"
                    />
                    <span className="text-xl font-bold">VarsIT</span>
                </Link>
                <nav className="hidden gap-6 md:flex">
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
                    <Link href="#contact">
                        <Button>Skontaktuj się</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
