"use client";

import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import { navLinks } from "@/data";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { Phone } from "@phosphor-icons/react";
import UserLinks from "./UserLinks";

type Props = {};

const Navbar = (props: Props) => {
  const user = false;
  return (
    <nav className="md:container md:max-w-screen-xl md:mx-auto flex justify-between h-14 text-red-500 py-4 mx-3 items-center">
      {/* <Image src="" width={}height={}alt=""/> */}
      <div>
        <p className="uppercase font-bold">massimo&apos;s pizza</p>
      </div>
      <div className="hidden md:flex uppercase gap-x-4 cursor-pointer">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-2 justify-center md:absolute md:top-[5px] right-6 items-center bg-orange-400 p-1 rounded-md">
        <Phone size={20} color="#ffffff" weight="fill" />
        <p className="text-sm text-red-500 font-bold">8596 8965</p>
      </div>
      <Menu size={24} menuStyles="fill-red-500" />
      <div className="md:flex gap-x-4 hidden">
        <UserLinks />
        <CartIcon size={20} color="text-red-500" />
      </div>
    </nav>
  );
};

export default Navbar;
