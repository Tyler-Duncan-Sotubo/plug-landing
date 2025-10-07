"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance, isAxiosError } from "../../lib/axios";

type smartLinkType = {
  title: string;
  artist: string;
  image: string;
  url: string;
};

const SmartLinks = () => {
  const fetchSmartLinks = async () => {
    try {
      const res = await axiosInstance.get("/api/smartlink");
      return res.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return [];
      }
    }
  };

  const {
    data: smartLinks,
    isLoading,
    isError,
  } = useQuery<smartLinkType[]>({
    queryKey: ["smart-links"],
    queryFn: fetchSmartLinks,
    enabled: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <section className="mx-auto my-20 w-[90%]">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">New Releases</h1>
      </div>
      <div className="mt-6 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        {smartLinks?.map((release: smartLinkType, index: number) => (
          <Link
            href={`https://weplugmusic.link/${release.url}`}
            key={index}
            target="_blank"
          >
            <div className="flex w-full flex-col items-center">
              <div className="relative mb-2 h-[180px] w-[180px] lg:h-[250px] lg:w-[250px]">
                <Image
                  src={release.image}
                  alt={release.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="text-center text-sm font-bold md:text-lg">
                {release.title}
              </h3>
              <h3 className="mb-10 mt-1 text-center text-sm text-zinc-900 md:text-lg">
                {release.artist}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SmartLinks;
