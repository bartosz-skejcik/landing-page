import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Jak długo trwa tworzenie strony internetowej?
        </AccordionTrigger>
        <AccordionContent>
          Większość stron internetowych dla małych firm zajmuje 2-4 tygodnie od
          początku do końca. Obejmuje to fazę planowania, projektowania, rozwoju
          i poprawek. Bardziej złożone strony z niestandardowymi funkcjami mogą
          zająć więcej czasu. Podam konkretny harmonogram podczas naszej
          wstępnej konsultacji w oparciu o Twoje potrzeby.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Jakich bieżących kosztów powinienem się spodziewać?
        </AccordionTrigger>
        <AccordionContent>
          Istnieją dwa główne bieżące koszty: hosting/utrzymanie i rejestracja
          domeny. Plany hostingu i utrzymania wahają się od 60 do 170 zł
          miesięcznie, w zależności od potrzeb Twojej strony, i obejmują
          aktualizacje zabezpieczeń, kopie zapasowe i podstawowe wsparcie.
          Rejestracja domeny zazwyczaj kosztuje 50-80 zł rocznie. Jesteśmy
          transparentni odnośnie wszystkich kosztów z góry, więc nie ma żadnych
          niespodzianek.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Czy będę mógł samodzielnie aktualizować stronę?
        </AccordionTrigger>
        <AccordionContent>
          Każda strona, którą tworzymy, zawiera przyjazny dla użytkownika system
          zarządzania treścią i szkolenie, dzięki czemu możesz aktualizować
          tekst, obrazy, dodawać nowe strony, wpisy na blogu i więcej.
          Zapewniamy samouczki wideo i dokumentację specyficzną dla Twojej
          strony. W przypadku bardziej złożonych zmian, zawsze jesteśmy
          dostępni, aby udzielić wsparcia.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Czy potrzebuję złożonej strony, czy wystarczy coś prostego?
        </AccordionTrigger>
        <AccordionContent>
          To zależy od celów Twojej firmy. Wiele małych firm radzi sobie bardzo
          dobrze z prostą, dobrze zaprojektowaną stroną o 3-5 podstronach, która
          jasno komunikuje ich wartość i ułatwia klientom kontakt. Podczas
          naszej konsultacji pomogę Ci określić dokładnie, jakie funkcje są
          potrzebne do osiągnięcia Twoich celów bez zbędnej złożoności.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Jak ludzie znajdą moją stronę?</AccordionTrigger>
        <AccordionContent>
          Wszystkie strony zawierają podstawową optymalizację dla wyszukiwarek
          (SEO), aby pomóc klientom znaleźć Cię online. Obejmuje to odpowiednią
          strukturę strony, szybkie czasy ładowania, optymalizację mobilną i
          lokalne wizytówki firmowe. Dla firm, które potrzebują bardziej
          zaawansowanego SEO, oferujemy dodatkowe usługi lub mogę polecić
          specjalistów, którzy skupiają się wyłącznie na długoterminowych
          kampaniach SEO.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Co jeśli będę potrzebować pomocy po uruchomieniu strony?
        </AccordionTrigger>
        <AccordionContent>
          Oferujemy różne opcje wsparcia, aby zaspokoić Twoje potrzeby. Wszyscy
          klienci otrzymują 30 dni bezpłatnego wsparcia po uruchomieniu. Po tym
          czasie miesięczne plany konserwacji obejmują określoną ilość czasu
          wsparcia lub możesz kupić godziny wsparcia w razie potrzeby. Jestem
          zobowiązany być długoterminowym partnerem w Twoim sukcesie online, a
          nie tylko jednorazowym usługodawcą.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          Czy pracujecie z określonymi branżami?
        </AccordionTrigger>
        <AccordionContent>
          Specjalizujemy się w pracy z lokalnymi firmami usługowymi, sklepami
          detalicznymi, restauracjami, usługami profesjonalnymi i placówkami
          opieki zdrowotnej. Nasze doświadczenie w tych branżach pozwala mi
          zrozumieć unikalne wyzwania i możliwości dla każdego rodzaju firmy. Z
          przyjemnością omówimy Twoją konkretną branżę podczas naszej
          konsultacji.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
