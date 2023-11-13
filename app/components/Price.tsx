"use client";

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const { addToCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);
  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("El producto ha sido agregado al carrito!");
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl text-center md:text-left font-black">
          ${total}
        </h2>
      </div>
      <div className="flex justify-between sm:w-[50%]">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              className="p-2 ring-1 ring-red-500 rounded-md min-w-[6rem]"
              key={option.title}
              style={{
                background: selected === index ? "rgb(238 113 113)" : "white",
                color: selected === index ? "white" : "rgb(238 113 113)",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      <div className="flex">
        <div className="flex items-center justify-between ring-1 ring-red-500 px-4 w-56 ">
          <div>
            <span>Cantidad</span>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="py-3 ring-1 ring-red-500 px-5 bg-red-500 text-white font-bold"
          onClick={handleCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Price;
