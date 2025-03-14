import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Logo"
            width={24}
            height={24}
            className="rounded"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VarsIT. Wszelkie prawa zastrzeżone.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Polityka prywatności
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Warunki korzystania z usług
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
