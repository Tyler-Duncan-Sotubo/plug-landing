import Image from "next/image";

const Vevo = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 bg-[url('https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556262/VevoBg_yyrrag.jpg')] bg-cover bg-blend-overlay">
      <h1 className="px-3 text-center text-4xl font-bold tracking-wide text-white md:w-1/2 md:text-7xl">
        Release Official Music Videos on Vevo
      </h1>
      <h3 className="mt-6 px-3 text-center text-lg font-medium capitalize tracking-wider text-secondary md:w-1/2">
        Get your music videos live on VEVO and start earning royalties from the
        world’s most popular music video platforms. From channel setup to video
        uploads, we’ve got you covered.
      </h3>
      <div className="my-20 flex gap-9">
        <div className="relative h-16 w-24 duration-300 hover:scale-125 md:h-16 md:w-36">
          <Image
            src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556245/vevo-auth_luzz9v.svg"
            alt="logo of vevo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative h-16 w-24 duration-300 hover:scale-125 md:h-16 md:w-36">
          <Image
            src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556247/youtube-music-auth_kkw9rg.svg"
            alt="logo of vevo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Vevo;
