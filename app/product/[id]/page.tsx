import Price from "@/app/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

const SingleProductPage = (props: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto text-red-500 h-[calc(100vh-6rem)] grid grid-cols-1 sm:grid-cols-2">
      <div className="relative flex justify-center items-center w-full sm:w-[60%] mx-auto sm:ml-48">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            // width={400}
            // height={400}
            fill
            alt="product image"
            className="object-contain object-center"
          ></Image>
        )}
      </div>
      <div className="flex flex-col gap-y-4 justify-center sm:px-10 px-5">
        <h2 className="text-2xl sm:text-left text-center font-bold">{singleProduct.title}</h2>
        <h3 className="text-center sm:text-left">{singleProduct.desc}</h3>
        <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id}/>
      </div>
    </div>
  );
};

export default SingleProductPage;
