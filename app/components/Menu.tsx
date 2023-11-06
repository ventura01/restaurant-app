"use client";

import { navLinks } from "@/data";
import Link from "next/link";
import { menuProps } from "@/types";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import CartIcon from "./CartIcon";

type Props = {};

const Menu = ({ menuStyles, size }: menuProps) => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div className="md:hidden z-10">
      {!open ? (
        <List
          size={size}
          className={menuStyles}
          onClick={() => setOpen(true)}
        />
      ) : (
        <X size={size} className={menuStyles} onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="h-[calc(100vh-6rem)] gap-y-8 text-white top-24 flex-col w-full capitalize absolute flex justify-center items-center left-0  bg-red-500">
          {navLinks.map((link) => (
            <Link
              className="block uppercase text-lg items-center justify-center"
              key={link.id}
              href={link.url}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link
              className="uppercase"
              onClick={() => setOpen(false)}
              href="/login"
            >
              Login
            </Link>
          ) : (
            <Link
              className="uppercase"
              onClick={() => setOpen(false)}
              href="/orders"
            >
              Orders
            </Link>
          )}
          <CartIcon size={24} color="text-white" />
        </div>
      )}
    </div>
  );
};

export default Menu;
