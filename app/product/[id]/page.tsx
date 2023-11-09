import Price from "@/app/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

const SingleProductPage = (props: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto text-red-500 h-[calc(100vh-6rem)] grid grid-cols-1 sm:grid-cols-3">
      <div className="relative px-5 md:px-0 flex w-full">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            // width={400}
            // height={400}
            layout="fill"
            // fill
            alt="product image"
            className="object-contain object-center"
          ></Image>
        )}
      </div>
      <div className="flex flex-col gap-y-4 justify-center sm:px-10 px-5 md:col-start-2 md:col-end-4">
        <h2 className="text-2xl sm:text-left text-center font-bold">{singleProduct.title}</h2>
        <h3 className="">{singleProduct.desc}</h3>
        <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id}/>
      </div>
    </div>
  );
};

export default SingleProductPage;
