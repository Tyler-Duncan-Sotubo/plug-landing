"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[92vh] bg-[url('https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556253/vevo_i8pcqh.jpg')] bg-cover">
      <div className="absolute top-1/2 -translate-y-1/2 transform px-5 md:w-1/2 md:pl-20">
        <h1 className="font-bold tracking-wide text-white md:text-6xl">
          Get your music videos on VEVO
        </h1>
        <h3 className="mt-6 font-medium capitalize text-secondary">
          Make your music videos available on the largest video network in the
          world through Vevo
        </h3>

        <div className="my-10 flex gap-9">
          <div className="relative h-28 w-40">
            <Image
              src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556245/vevo-auth_luzz9v.svg"
              alt="logo of vevo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="relative h-28 w-40">
            <Image
              src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556247/youtube-music-auth_kkw9rg.svg"
              alt="logo of youtube music"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
