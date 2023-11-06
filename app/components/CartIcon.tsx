import { ShoppingCart } from "@phosphor-icons/react";
import React from "react";
import { cartIconProps } from "@/types";

type Props = {};

const CartIcon = ({ color, size }: cartIconProps) => {
  return (
    <div className="flex gap-x-3 relative justify-center items-center">
      <ShoppingCart size={size} className={color} />
      <div className="absolute bg-orange-500 rounded-full text-white text-[12px] font-bold py-[1px] px-[6px] -top-2 -right-[16px]">
        <span>3</span>
      </div>
    </div>
  );
};

export default CartIcon;
