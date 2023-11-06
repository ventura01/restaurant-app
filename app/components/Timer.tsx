"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const Timer = (props: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // const target = new Date("12/31/2023 23:59:59");
    const actualDay = new Date().getDate();
    const actualMonth = new Date().getMonth();
    const actualYear = new Date().getFullYear();
    let fechaFuturo = new Date(actualYear, actualMonth, actualDay + 10);
    // console.log(fechaFuturo);
    const target = new Date(fechaFuturo);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="relative mt-0 w-auto mx-auto">
        <div className="flex flex-col">
          <div className="mx-auto flex gap-x-5">
            <div className="flex flex-col items-center justify-self-center">
              <div className=" relative mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-gray-800 shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <div className="absolute top-1/2 h-[.25rem] w-full bg-black opacity-10"></div>
                <div className="-top-1 opacity-80">
                  <div className="absolute -left-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                  <div className="absolute -right-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                </div>
                <span className="block text-4xl font-bold text-orange-500  md:text-6xl">
                  {days < 10 ? `0${days}` : `${days}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-white">
                days
              </span>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <div className="overflow-hidden relative mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800 shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <div className="absolute top-1/2 h-[.25rem] w-full bg-black opacity-10"></div>
                <div className="-top-1 opacity-80">
                  <div className="absolute -left-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                  <div className="absolute -right-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                </div>
                <span className="block text-4xl font-bold text-orange-500  md:text-6xl">
                  {hours < 10 ? `0${hours}` : `${hours}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-white">
                hours
              </span>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <div className="overflow-hidden relative mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800 shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <div className="absolute top-1/2 h-[.25rem] w-full bg-black opacity-10"></div>
                <div className="-top-1 opacity-80">
                  <div className="absolute -left-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                  <div className="absolute -right-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                </div>
                <span className="block text-4xl font-bold text-orange-500  md:text-6xl">
                  {minutes < 10 ? `0${minutes}` : `${minutes}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-white">
                minutes
              </span>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <div className="overflow-hidden relative mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800 shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <div className="absolute top-1/2 h-[.25rem] w-full bg-black opacity-10"></div>
                <div className="-top-1 opacity-80">
                  <div className="absolute -left-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                  <div className="absolute -right-1 h-2 top-1/2 w-2 rounded-full bg-veryDarkBlueBlack "></div>
                </div>
                <span className="block text-4xl font-bold text-orange-500  md:text-6xl">
                  {seconds < 10 ? `0${seconds}` : `${seconds}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-white">
                seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
