"use client";

import React from "react";
import { vevoFAQ } from "@/assets/data/data";
import Hero from "@/section/Vevo/Hero";
import FAQBlock from "@/section/Vevo/FAQBlock";
import Pricing from "@/section/Vevo/Pricing";
import Steps from "@/section/Vevo/Steps";
import WhyVevo from "@/section/Vevo/WhyVevo";

const Page = () => {
  // Replace with your auth/user state
  const user = true;

  return (
    <section>
      <Hero />
      <Steps />
      <WhyVevo />
      <Pricing user={user} />
      <FAQBlock faqs={vevoFAQ} />
    </section>
  );
};

export default Page;
