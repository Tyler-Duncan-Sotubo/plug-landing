"use client";

import Image from "next/image";
import Navigation from "../components/navigation/Navigation";
import { distros } from "../assets/data/data";
import Footer from "../components/Footer";
import SmartLinks from "../section/Homepage/SmartLinks";
import WhyChooseUs from "../section/Homepage/WhyChooseUs";
import Vevo from "../section/Homepage/Vevo";
import { TestimonialSlider } from "../section/Homepage/TestimonialSlider";
import SubscriptionPlan from "../section/Homepage/SubscriptionPlan";

type DistroType = {
  name: string;
  image: string;
};

const Homepage = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-[url('https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556253/homepage_hxsv8b.png')] bg-cover md:mt-[5rem]">
          <div className="absolute top-1/3 -translate-y-1/3 transform px-5 md:w-1/2 md:pl-20">
            <h1 className="font-bold tracking-wide text-white md:text-6xl">
              The simplest way to sell your music globally.
            </h1>
            <h3 className="mt-6 font-medium capitalize text-secondary">
              Helping independent artist and Labels Reach millions of listeners
              – easier than ever before
            </h3>
          </div>
          <div className="absolute top-2/3 mx-auto w-full md:top-3/4">
            <h3 className="text-center text-sm font-bold uppercase text-white">
              Get Your Music On
            </h3>
            <div className="flex flex-wrap justify-center gap-5 px-5 md:gap-10">
              {distros.map((distro: DistroType, index: number) => (
                <div
                  key={index}
                  className="relative h-16 w-24 duration-300 hover:scale-125 md:h-16 md:w-36"
                >
                  <Image
                    src={distro.image}
                    alt={`logo of ${distro.name}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <SmartLinks />
        <SubscriptionPlan header="Choose Your Perfect Plan" />
        <Vevo />
        <TestimonialSlider />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
