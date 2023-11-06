import React from "react";
import { footerLinks } from "@/data";
import Link from "next/link";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-red-500 py-20">
      <div className="md:container md:max-w-screen-xl md:mx-auto mx-4 grid grid-cols-1 md:grid-cols-3 gap-y-3">
        <div>Logo</div>
        <div className="flex flex-col gap-y-3 justify-center">
          {footerLinks.map((footerLink) => (
            <div className="" key={footerLink.title}>
              <h4 className="font-semibold text-white text-sm capitalize">
                {footerLink.title}
              </h4>
              <div>
                {footerLink.links.map((link) => (
                  <Link
                    className="flex flex-col text-white capitalize text-sm"
                    key={link.url}
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>RR.SS</div>
      </div>
    </footer>
  );
};

export default Footer;
