"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

const UserLinks = (props: Props) => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex gap-x-4">
          <Link
            className=""
            // onClick={() => setOpen(false)}
            href="/orders"
          >
            Orders
          </Link>
          <span className="cursor-pointer" onClick={()=> signOut()}>Log out</span>
        </div>
      ) : (
        <Link
          className="uppercase"
          // onClick={() => setOpen(false)}
          href="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default UserLinks;
