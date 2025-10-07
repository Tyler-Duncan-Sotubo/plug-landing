"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="from-backgroundTo relative  py-16 text-black shadow-2xl border-t border-t-gray-300 bg-gradient-to-b to-white">
      <section className="mx-auto w-[90%]">
        <div className="grid w-[80%] grid-cols-1 gap-6 md:grid-cols-3">
          {get_started.map((item, index) => (
            <div key={index}>
              <h3 className="mb-6 text-xl font-bold">{item.title}</h3>
              <ul className="flex flex-col gap-3">
                {item.links.map((link, index) => (
                  <li key={index} className="flex list-none items-center gap-2">
                    <Link
                      href={link.href}
                      className="hover:text-primary tracking-wider"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-between">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex justify-between gap-6">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

const get_started = [
  {
    title: "Get Started",

    links: [
      {
        href: "/register",
        title: "Sign Up",
      },
      {
        href: "/login",
        title: "Login",
      },
      {
        href: "/pricing",
        title: "Pricing",
      },
      {
        href: "/contact",
        title: "Contact Us",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        href: "/dashboard/music",
        title: "Music Submission",
      },
      {
        href: "/vevo",
        title: "Vevo Channel",
      },
      {
        href: "/promo",
        title: "Music Promotion",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        href: "/support",
        title: "FAQ",
      },
      {
        href: "/terms",
        title: "Terms & Conditions",
      },
      {
        href: "/terms",
        title: "Privacy",
      },
      {
        href: "/blog",
        title: "Blog",
      },
    ],
  },
];
