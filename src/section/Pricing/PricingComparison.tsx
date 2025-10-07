"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

type Plan = { name: string; cta?: React.ReactNode };
type FeatureRow = { feature: string; includes: boolean[] };

type PricingComparisonProps = {
  title?: string;
  plans: Plan[];
  features: FeatureRow[];
  className?: string;
};

const PricingComparison: React.FC<PricingComparisonProps> = ({
  title = "Which Plan is Perfect for You?",
  plans,
  features,
  className = "",
}) => {
  // one source of truth for columns (feature col + N plan cols)
  const gridTemplate = `minmax(220px,1.2fr) repeat(${plans.length}, minmax(170px,1fr))`;

  return (
    <article
      className={`relative min-h-screen py-16 text-black ${className}`}
      aria-label="Pricing comparison"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="mx-auto w-[95%] md:w-[90%]">
        <h1 className="mb-10 mt-4 text-center text-3xl font-bold tracking-tight md:mb-16 md:text-5xl">
          {title}
        </h1>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40">
          {/* Header: same grid template as rows */}
          <div
            className="sticky top-0 z-10 grid items-stretch gap-2 border-b border-slate-200 bg-white/80 px-4 py-6 backdrop-blur supports-[backdrop-filter]:bg-white/60"
            style={{ gridTemplateColumns: gridTemplate }}
          >
            <div className="h-full" />
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-lg font-semibold md:text-2xl">
                  {plan.name}
                </h3>
                {plan.cta ? <div className="mt-2">{plan.cta}</div> : null}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="divide-y divide-slate-200">
            {features.map((row, rIdx) => (
              <div
                key={rIdx}
                className={`grid items-center gap-2 px-4 py-4 transition-colors hover:bg-slate-50 ${
                  rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }`}
                style={{ gridTemplateColumns: gridTemplate }}
              >
                <h3 className="text-sm font-medium text-slate-700 md:text-base">
                  {row.feature}
                </h3>

                {row.includes.map((hasIt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center"
                    aria-label={`${plans[i]?.name} ${
                      hasIt ? "includes" : "does not include"
                    } ${row.feature}`}
                  >
                    {hasIt ? (
                      <FaCircleCheck className="text-2xl text-emerald-600" />
                    ) : (
                      <span
                        aria-hidden
                        className="h-6 w-6 rounded-full border border-slate-300"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-prose text-center text-sm text-slate-600">
          Need help choosing? Compare features and click “Get Started” on the
          plan that fits you.
        </p>
      </div>
    </article>
  );
};

export default PricingComparison;
