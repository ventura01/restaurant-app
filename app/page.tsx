import { Airplane } from "@phosphor-icons/react";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Featured from "./components/Featured";
import Offer from "./components/Offer";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  );
}
