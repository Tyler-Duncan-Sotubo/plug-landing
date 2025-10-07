"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string | string[];
};

type FAQProps = {
  faqs: FaqItem[];
  header?: string;
  className?: string;
};

const FrequentlyAskedQuestions = ({
  faqs,
  header = "",
  className = "",
}: FAQProps) => {
  return (
    <section className={`${className} mx-auto w-[90%] md:w-[70%]`}>
      {header ? (
        <h1 className="mb-16 mt-4 text-center text-4xl">{header}</h1>
      ) : null}

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-4">
            <AccordionTrigger className="text-left text-lg md:text-2xl">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="text-base md:text-xl">
              {Array.isArray(faq.answer) ? (
                <ul className="mt-2 space-y-3">
                  {faq.answer.map((ans, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="mt-1 shrink-0" />
                      <p>{ans}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">{faq.answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FrequentlyAskedQuestions;
