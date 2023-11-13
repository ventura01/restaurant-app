"use client";

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";

type Props = {};

const CartPage = (props: Props) => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] container max-w-screen-xl grid grid-cols-1 md:grid-cols-3 text-red-500 mx-auto">
      <div className="flex flex-col justify-center p-4 col-start-1 col-end-2 md:col-start-1 md:col-end-3 md:px-20 sm:px-5">
        {products.map((product) => (
          <div
            className="flex justify-between items-center mb-4"
            key={product.id}
          >
            {product.img && (
              <Image
                src={product.img}
                height={100}
                width={100}
                alt="product"
              ></Image>
            )}
            <div>
              <h2 className="text-lg uppercase font-bold">{product.title} X {product.quantity}</h2>
              <span>{product.optionTitle}</span>
            </div>
            <h3 className="font-bold">${product.price}</h3>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(product)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 flex flex-col justify-center md:px-6 md:gap-y-5">
        <div className="flex justify-between px-4">
          <span className="font-semibold">Subtotal ({totalItems} Items)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-semibold">Propina</span>
          <span className="font-bold">$0</span>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-semibold">Delivery</span>
          <span className="font-bold text-green-500">FREE!</span>
        </div>
        <hr className="my-5" />
        <div className="flex justify-between px-4">
          <span className="font-bold">Total (Incl. I.V.A 15%)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <div className="self-end p-4">
          <button className="bg-red-500 py-3 px-5 text-white font-bold">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
