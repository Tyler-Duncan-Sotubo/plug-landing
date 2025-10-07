import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="mt-12">
      <div className="mx-auto w-[85%]">
        <div className="items-center justify-between gap-16 md:flex">
          <div className="md:w-[50%]">
            <h1 className="text-5xl font-bold md:text-7xl">
              Don&apos;t stand alone in the rain
            </h1>
            <h3 className="mt-6 text-xl tracking-wide">
              - We take care of hurdles in distribution.
            </h3>
            <h3 className="mt-6 text-lg tracking-wider text-black">
              We distribute your music to top digital music services like
              Spotify, Apple Music, Tidal, Amazon Music, and more. We also help
              you promote your music and get it heard by millions of new fans.
            </h3>
          </div>
          <div className="justify-self-end md:w-[50%]">
            <Image
              src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556253/image_test_four_iapsjj.jpg"
              alt="why choose us"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[85%] py-24">
        <div className="flex flex-col-reverse items-center gap-16 md:flex md:flex-row">
          <div className="md:w-[50%]">
            <Image
              src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556256/image_test_three_fnrln8.jpg"
              alt="why choose us"
              width={600}
              height={500}
            />
          </div>
          <div className="md:w-[55%]">
            <h1 className="text-5xl font-bold md:text-7xl">
              Keep 100% of Your Rights
            </h1>
            <h3 className="mt-6 text-xl tracking-wide">
              - Focus on what you do best. We&apos;ll take care of the rest.
            </h3>
            <h3 className="mt-6 text-lg tracking-wider text-black">
              Be in control of your success.We provide you with the tools you
              need to succeed in the music industry. You can track your sales,
              streaming revenue, and more from your dashboard.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
