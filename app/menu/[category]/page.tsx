import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const CategoryPage = (props: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-red-500 my-20">
      {pizzas.map((item) => (
        <Link
          className="w-full flex flex-col items-center justify-center gap-y-6 my-8 group odd:bg-slate-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative">
              <Image
                src={item.img}
                width={200}
                height={200}
                alt="Image product"
                className="object contain "
              ></Image>
            </div>
          )}
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <h3 className="group-hover:hidden text-xl font-black">
            ${item.price}
          </h3>
          <button className="hidden bg-red-500 group-hover:block py-3 px-5 uppercase text-white font-bold">
            Agregar al carrito
          </button>
        </Link>
      ))}
      {/* IMAGE CONTAINER */}
    </div>
  );
};

export default CategoryPage;
