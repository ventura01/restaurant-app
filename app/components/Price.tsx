"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, price, options]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-black">${total.toFixed(2)}</h2>
      </div>
      <div className="flex justify-between sm:w-[70%]">
        {options?.map((option, index) => (
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
        <div className="flex items-center justify-between ring-1 ring-red-500 px-4 w-56">
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
        <button className="py-3 ring-1 ring-red-500 px-5 bg-red-500 text-white font-bold">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Price;
