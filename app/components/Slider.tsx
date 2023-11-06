"use client";

import Image from "next/image";
import { sliderData } from "@/data";
import { useEffect, useState } from "react";

type Props = {};

const Slider = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === sliderData.length - 1 ? 0 : prev + 1
        ),
      3000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      <div className="flex justify-center items-center gap-y-14 flex-col mx-4  md:mx-16">
        <h1 className="text-red-500 font-bold text-4xl md:text-6xl text-center first-letter:capitalize">
          {sliderData[currentSlide].title}
        </h1>
        <button className="bg-red-500 px-4 py-3 text-white font-bold">
          Ordena Ahora!
        </button>
      </div>
      <div className="w-full relative">
        <Image
          src={sliderData[currentSlide].url}
          //   width={200}
          //   height={200}
          alt="slide1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
