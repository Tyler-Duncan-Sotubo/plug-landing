"use client";

import { usePathname } from "next/navigation";
import ApplicationLogo from "../ui/ApplicationLogo";
import Link from "next/link";
import { navData } from "../../assets/data/data";
import { Button } from "../ui/button";
import { NavLink } from "./NavLinks";

type navDataType = {
  name: string;
  href: string;
};

export const DesktopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav
      className="absolute top-0 mx-auto hidden w-full bg-white px-10 py-4 shadow-lg lg:flex lg:items-center lg:justify-between"
      id="nav"
    >
      <div className="flex gap-20">
        <Link href="/">
          <ApplicationLogo />
        </Link>
        <ul className="flex items-center gap-6">
          {navData.map((item: navDataType, index: number) => (
            <li key={index}>
              <NavLink href={item.href} active={pathname === item.href}>
                <p className="hover:text-blue-700 text-black">{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex items-center gap-5">
        <div className="">
          <>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register" className="ml-4">
              <Button>Sign Up</Button>
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};
