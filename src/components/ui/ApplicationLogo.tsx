import Image from "next/image";

const ApplicationLogo = () => (
  <div>
    <div className="relative h-12 w-32">
      <Image
        src="https://res.cloudinary.com/dw1ltt9iz/image/upload/v1759556253/logo_xrjxp2.png"
        alt="Logo"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>
);

export default ApplicationLogo;
