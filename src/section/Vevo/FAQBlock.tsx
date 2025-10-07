"use client";

import React from "react";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

type FAQBlockProps = {
  faqs: { question: string; answer: string | string[] }[];
};

const FAQBlock: React.FC<FAQBlockProps> = ({ faqs }) => {
  return (
    <div className="mt-20">
      <FrequentlyAskedQuestions
        faqs={faqs}
        header="Frequently Asked Questions"
      />
    </div>
  );
};

export default FAQBlock;
