// import { menu } from "@/data";
import { MenuType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const gatData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }
  return res.json();
};

type Props = {};

const MenuPage = async (props: Props) => {
  const menu:MenuType = await gatData();
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] justify-center items-center">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className="w-full bg-cover p-8 md:h-1/3"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2 gap-y-8 flex flex-col`}>
            <h4 className="font-bold uppercase text-2xl">{category.title}</h4>
            <p className="text-sm ">{category.desc}</p>
            <button
              className={`hidden 2xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } font-bold py-3 px-4`}
            >
              Explorar
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
