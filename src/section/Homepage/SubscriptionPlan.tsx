"use client";

import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { features } from "../../assets/data/data";
import CurrencySelectorComponent from "../../components/CurrencySelectorComponent";

type SubscriptionPlanProps = {
  header?: string;
};

const SubscriptionPlan = ({ header = "" }: SubscriptionPlanProps) => {
  const [currency, setCurrency] = useState<string | null>("NGN");

  return (
    <section className="mx-auto w-[90%]">
      <div className="pb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">{header}</h2>
        <section className="my-10 flex justify-center gap-4 capitalize">
          <p>selected preferred currency</p>
          <div className="w-16">
            <CurrencySelectorComponent
              currency={currency}
              setCurrency={setCurrency}
            />
          </div>
        </section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border px-7 py-6 duration-1000 hover:scale-105 ${
                index === 1 && "bg-blue-900 text-white"
              }`}
            >
              {index === 1 ? (
                <div className="text-right">
                  <p className="inline-block bg-primary px-2 py-1 text-[10px]">
                    Popular Plan
                  </p>
                </div>
              ) : (
                <div className="py-3" />
              )}
              <h3 className="capitalize">{feature.product}</h3>
              <div className="my-2 flex items-center gap-2">
                {currency === "NGN" ? (
                  <h1>₦{feature.price}</h1>
                ) : (
                  <h1>${feature.price_in_usd}</h1>
                )}
                <p>Per Year</p>
              </div>
              <h6 className="font-light">{feature.description}</h6>
              <div className="my-3 flex flex-col">
                <Link href="/pricing" className="my-3 flex flex-col">
                  <button
                    className={`py-3 text-white cursor-pointer ${
                      index === 1 ? "bg-primary" : "bg-black"
                    }`}
                  >
                    <p>Get Started</p>
                  </button>
                </Link>
              </div>
              <div className="mt-6">
                <h3 className="mb-3 font-bold">Features</h3>
                <ul className="mb-10 flex flex-col gap-2">
                  {feature.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <BsFillPatchCheckFill className="text-primary" />
                      <p className="text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
