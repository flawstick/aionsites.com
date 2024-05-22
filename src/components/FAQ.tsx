import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale, useTranslations } from "next-intl";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "question1",
    answer: "answer1",
    value: "item-1",
  },
  {
    question: "question2",
    answer: "answer2",
    value: "item-2",
  },
  {
    question: "question3",
    answer: "answer3",
    value: "item-3",
  },
  {
    question: "question4",
    answer: "answer4",
    value: "item-4",
  },
  {
    question: "question5",
    answer: "answer5",
    value: "item-5",
  },
];

export const FAQ = () => {
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("FAQ");

  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          isRTL ? "text-right" : ""
        }`}
      >
        {t("heading")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("questions")}
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger
              className={`text-left ${isRTL ? "text-right rtl" : ""}`}
            >
              {t(question)}
            </AccordionTrigger>
            <AccordionContent className={isRTL ? "text-right" : ""}>
              {t(answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className={`font-medium mt-4 ${isRTL ? "text-right rtl" : ""}`}>
        {t("stillHaveQuestions")}{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          {t("contactUs")}
        </a>
      </h3>
    </section>
  );
};
