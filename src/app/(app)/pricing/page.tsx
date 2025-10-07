import { pricingFAQ, subscriptionPlanToChoose } from "@/assets/data/data";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import SubscriptionPlan from "@/section/Homepage/SubscriptionPlan";
import PricingComparison from "@/section/Pricing/PricingComparison";

const GetStartedButton = () => (
  <button className="mt-4 rounded-3xl border-2 px-2 py-2 text-xs capitalize text-black md:px-6 md:text-2xl">
    <p>Get Started</p>
  </button>
);

const plans = [
  { name: "Silver Plan", cta: <GetStartedButton /> },
  { name: "Gold Plan", cta: <GetStartedButton /> },
  { name: "Platinum Plan", cta: <GetStartedButton /> },
];

const features = subscriptionPlanToChoose.map(
  (item: { feature: string; includes: string[] }) => ({
    feature: item.feature,
    includes: item.includes.map((v) => v === "yes"),
  })
);

const page = async () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <h1 className="mb-10 mt-10 text-center text-7xl">Pricing</h1>
        </div>
        <SubscriptionPlan header="Choose the Right Plan for Your Music Distribution" />
        {/* Frequently Asked Questions For Pricing */}
        <FrequentlyAskedQuestions
          faqs={pricingFAQ}
          header="Frequently Asked Questions"
        />

        {/* Subscription Plan To Choose */}
        <PricingComparison
          title="Which Plan is Perfect for You?"
          plans={plans}
          features={features}
          className="mt-10"
        />
      </section>
    </>
  );
};

export default page;
