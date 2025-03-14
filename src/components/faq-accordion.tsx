import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "Jak długo trwa tworzenie strony internetowej?",
    answer:
      "Większość stron internetowych dla małych firm zajmuje 2-4 tygodnie od początku do końca. Obejmuje to fazę planowania, projektowania, rozwoju i poprawek. Bardziej złożone strony z niestandardowymi funkcjami mogą zająć więcej czasu. Podam konkretny harmonogram podczas naszej wstępnej konsultacji w oparciu o Twoje potrzeby.",
  },
  {
    question: "Jakich bieżących kosztów powinienem się spodziewać?",
    answer:
      "Istnieją dwa główne bieżące koszty: hosting/utrzymanie i rejestracja domeny. Plany hostingu i utrzymania wahają się od 60 do 170 zł miesięcznie, w zależności od potrzeb Twojej strony, i obejmują aktualizacje zabezpieczeń, kopie zapasowe i podstawowe wsparcie. Rejestracja domeny zazwyczaj kosztuje 50-80 zł rocznie. Jesteśmy transparentni odnośnie wszystkich kosztów z góry, więc nie ma żadnych niespodzianek.",
  },
  {
    question: "Czy będę mógł samodzielnie aktualizować stronę?",
    answer:
      "Każda strona, którą tworzymy, zawiera przyjazny dla użytkownika system zarządzania treścią i szkolenie, dzięki czemu możesz aktualizować tekst, obrazy, dodawać nowe strony, wpisy na blogu i więcej. Zapewniamy samouczki wideo i dokumentację specyficzną dla Twojej strony. W przypadku bardziej złożonych zmian, zawsze jesteśmy dostępni, aby udzielić wsparcia.",
  },
  {
    question: "Czy potrzebuję złożonej strony, czy wystarczy coś prostego?",
    answer:
      "To zależy od celów Twojej firmy. Wiele małych firm radzi sobie bardzo dobrze z prostą, dobrze zaprojektowaną stroną o 3-5 podstronach, która jasno komunikuje ich wartość i ułatwia klientom kontakt. Podczas naszej konsultacji pomogę Ci określić dokładnie, jakie funkcje są potrzebne do osiągnięcia Twoich celów bez zbędnej złożoności.",
  },
  {
    question: "Jak ludzie znajdą moją stronę?",
    answer:
      "Wszystkie strony zawierają podstawową optymalizację dla wyszukiwarek (SEO), aby pomóc klientom znaleźć Cię online. Obejmuje to odpowiednią strukturę strony, szybkie czasy ładowania, optymalizację mobilną i lokalne wizytówki firmowe. Dla firm, które potrzebują bardziej zaawansowanego SEO, oferujemy dodatkowe usługi lub mogę polecić specjalistów, którzy skupiają się wyłącznie na długoterminowych kampaniach SEO.",
  },
  {
    question: "Co jeśli będę potrzebować pomocy po uruchomieniu strony?",
    answer:
      "Oferujemy różne opcje wsparcia, aby zaspokoić Twoje potrzeby. Wszyscy klienci otrzymują 30 dni bezpłatnego wsparcia po uruchomieniu. Po tym czasie miesięczne plany konserwacji obejmują określoną ilość czasu wsparcia lub możesz kupić godziny wsparcia w razie potrzeby. Jestem zobowiązany być długoterminowym partnerem w Twoim sukcesie online, a nie tylko jednorazowym usługodawcą.",
  },
  {
    question: "Czy pracujecie z określonymi branżami?",
    answer:
      "Specjalizujemy się w pracy z lokalnymi firmami usługowymi, sklepami detalicznymi, restauracjami, usługami profesjonalnymi i placówkami opieki zdrowotnej. Nasze doświadczenie w tych branżach pozwala mi zrozumieć unikalne wyzwania i możliwości dla każdego rodzaju firmy. Z przyjemnością omówimy Twoją konkretną branżę podczas naszej konsultacji.",
  },
];

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-lg">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
