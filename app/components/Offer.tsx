import Image from "next/image";
import Timer from "./Timer";

type Props = {};

const Offer = (props: Props) => {
  return (
    <div className="bg-black grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 py-10 md:py-28 md:bg-[url('/temporary/offerBg.png')]">
      {/* TEXT CONTAINER */}

      <div className="flex flex-col justify-center items-center px-10 gap-y-8 ">
        <h2 className="text-white text-center text-5xl font-bold xl:text-6xl">Delicious Burger <br className="hidden md:flex"/>& French Fry</h2>
        <p className="text-white text-center">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. <br className="hidden md:flex"/>Quickly pontificate parallel.
        </p>
        <Timer/>
        <button className="bg-red-500 text-white font-bold py-3 px-4">Ordena Ahora!</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex justify-center items-center relative">
        <Image
          src="/temporary/offerProduct.png"
          width={700}
          height={700}
          // fill
          className="object-contain"
          alt="Offer image"
        />
      </div>
    </div>
  );
};

export default Offer;
