import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What do you do?",
    answer:
      "We help business grow by creating personalized software aligned with their plans and ambitions.",
    value: "item-1",
  },
  {
    question: "What are your services?",
    answer:
      "We create all kinds of personalized software, from websites all the way to self-serving AI robots.",
    value: "item-2",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We create personalized software, which means the costs are personalized along with them to fit your budget needs.",
    value: "item-3",
  },
  {
    question: "Do you have a support center?",
    answer:
      "We provide 24/7 support for all our clients. You will be provided a number to call once we establish partnership.",
    value: "item-4",
  },
  {
    question: "I would like to see a personalized demo, is that possible?",
    answer:
      "Yes, you can request a personalized demo. Simply contact us at info@aionsites.com, or fill out the contact form on this page.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
