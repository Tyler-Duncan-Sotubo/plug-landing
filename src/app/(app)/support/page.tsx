"use client";

import { useState } from "react";
import React from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { supportFAQ } from "@/assets/data/data";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

const SupportPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="mb-16 mt-32">
      <h1 className="text-center text-4xl font-bold">
        Support and Help Center
      </h1>
      <p className="mt-5 text-center text-lg text-muted-foreground">
        Welcome to our support and help center. Here you can find answers to
        common questions.
      </p>

      {/* Search Bar */}
      <div className="mt-8">
        <SearchBar />
      </div>

      {/* FAQ Categories */}
      <article className="mt-12 space-y-6">
        {supportFAQ.map((faq, index) => (
          <div key={index} className="w-full">
            {/* Category Header */}
            <div
              onClick={() =>
                activeIndex === index
                  ? setActiveIndex(null)
                  : setActiveIndex(index)
              }
              className="mx-auto flex w-[90%] cursor-pointer items-center justify-between rounded-xl border p-5 transition-colors hover:bg-muted md:w-[70%]"
            >
              <h3 className="text-lg font-semibold md:text-xl">{faq.Header}</h3>
              <span className="flex items-center justify-center text-primary transition-transform duration-300">
                {activeIndex === index ? (
                  <FaChevronCircleUp className="text-2xl md:text-3xl" />
                ) : (
                  <FaChevronCircleDown className="text-2xl md:text-3xl" />
                )}
              </span>
            </div>

            {/* FAQ Content */}
            {activeIndex === index && (
              <div className="animate-slideIn">
                <FrequentlyAskedQuestions faqs={faq.faqs} className="mt-6" />
              </div>
            )}
          </div>
        ))}
      </article>
    </section>
  );
};

export default SupportPage;
