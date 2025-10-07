"use client";

import React from "react";
import Image from "next/image";

const Steps = () => {
  return (
    <article className="mx-auto my-20 w-[90%]">
      <h1 className="mx-auto my-16 text-center capitalize md:w-1/2">
        How to get your music on VEVO
      </h1>

      <div className="md:flex-row-between flex flex-col gap-10 md:flex-row">
        <ul className="flex list-inside list-decimal flex-col gap-3 text-xl tracking-wide md:w-1/2">
          <li>Sign up for an account</li>
          <li>Set up an official Vevo artist channel.</li>
          <li>Submit your music videos for review</li>
          <li>
            Add credits and any collaborators to be paid by Vevo automatically.
          </li>
          <li>Start earning money</li>
          <li>Track and Withdraw Your Earnings</li>
        </ul>

        <div className="md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556262/vevo-inside_iwidvf.png"
            alt="vevo steps"
            width={800}
            height={600}
          />
        </div>
      </div>
    </article>
  );
};

export default Steps;
