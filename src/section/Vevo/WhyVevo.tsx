"use client";

import React from "react";
import Image from "next/image";

const WhyVevo = () => {
  return (
    <article>
      <div className="mx-auto my-20 w-[90%]">
        <div className="md:flex-row-between flex flex-col-reverse gap-10 md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556262/vevo-why_r6wjcz.png"
              alt="why choose vevo"
              width={600}
              height={400}
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="mx-auto my-6 text-center capitalize md:w-1/2">
              Why Vevo?
            </h1>

            <p className="mb-10 text-xl tracking-wide">
              With more than 900,000 videos from artists of all levels and
              genres, Vevo maintains the largest network of music channels on
              YouTube, as well as global distribution through a growing number
              of partners.
            </p>
            <p className="mb-10 text-xl tracking-wide">
              For over a decade, fans have come to recognize the Vevo logo as a
              verified indicator of premium, official content from the artists
              they are searching for and those they’ve yet to discover.
            </p>
            <p className="mb-10 text-xl tracking-wide">
              In addition to YouTube, Vevo distributes its extensive library of
              music videos to major Connected TV platforms and streaming
              services, including Apple TV, Hulu + Live TV, Pluto TV, Samsung TV
              Plus, and Roku. To learn more about Vevo&apos;s position on smart
              TVs and other connected devices.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WhyVevo;
