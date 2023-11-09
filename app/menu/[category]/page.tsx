// import { pizzas } from "@/data";
import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }
  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-red-500 my-20">
      {products.map((item) => (
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
