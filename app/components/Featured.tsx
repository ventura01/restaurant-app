import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className="overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-6 hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vh] xl:w-[33vh] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {product.img && (
              <div className="relative w-full flex-1 hover:rotate-[60deg] transition-all duration-300">
                <Image
                  src={product.img}
                  fill
                  alt="image"
                  className="object-contain"
                ></Image>
              </div>
            )}
            <div className="flex-1 flex flex-col justify-center  my-5 items-center gap-y-3 px-5 md:px-10 ">
              <h2 className="uppercase text-center text-xl xl:text-2xl font-bold">
                {product.title}
              </h2>
              <p className="text-center hidden md:flex">{product.desc}</p>
              <span className="font-bold text-2xl">${product.price}</span>
              <button className="text-white font-bold bg-red-500 px-4 py-3">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
