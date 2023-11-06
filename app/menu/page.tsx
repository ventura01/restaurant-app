import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const MenuPage = (props: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className="w-full bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2 gap-y-8 flex flex-col`}>
            <h4 className="font-bold uppercase text-2xl">{category.title}</h4>
            <p className="text-sm ">{category.desc}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === 'black' ? 'white' : 'red-500'} font-bold py-3 px-4`}>Explorar</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
