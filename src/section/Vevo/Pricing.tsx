"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PricingProps = {
  user: boolean;
};

const Pricing: React.FC<PricingProps> = ({ user }) => {
  return (
    <>
      <h1 className="mx-auto my-10 text-center capitalize md:w-1/2">Pricing</h1>

      <article className="mx-auto flex w-[90%] flex-col gap-10 text-white sm:flex-row md:w-[80%]">
        <div className="flex h-[400px] flex-col items-center justify-center gap-12 rounded-xl bg-black md:w-1/2">
          <p className="w-2/3 text-center text-3xl font-bold">
            VEVO Channel Set up &amp; Video Upload
          </p>
          <p className="text-5xl">₦ 100,000</p>
          <Link href={user ? "/dashboard/videos" : "/login"}>
            <Button className="h-16 text-2xl">New Vevo Channel</Button>
          </Link>
        </div>

        <div className="flex h-[400px] flex-col items-center justify-center gap-12 rounded-xl bg-primary md:w-1/2">
          <p className="w-2/3 text-center text-3xl font-bold">
            VEVO Video Upload
          </p>
          <p className="text-5xl">₦ 30,000</p>
          <Link href={user ? "/dashboard/videos" : "/login"}>
            <Button variant="secondary" className="h-16 text-2xl">
              New Vevo Video
            </Button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Pricing;
