import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto h-[calc(100vh-6rem)] flex justify-center items-center">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 p-4 rounded-md shadow-lg md:h-[70%] md:w-full lg:h-[60%]">
        <div className="relative h-1/3 w-full md:h-full">
          <Image src="/temporary/loginBg.png" fill alt="login image" className="object-cover"/>
        </div>
        <div className="p-10 flex flex-col gap-y-8 self-center">
          <h1 className="font-bold text-4xl">Bienvenido</h1>
          <p>Regístrate con tus cuentas de redes sociales</p>
          <button className="flex p-4 ring-2 ring-orange-500 rounded-md gap-x-4">
            <Image
              src="/temporary/google.png"
              className="object-contain"
              width={20}
              height={20}
              alt="login image"
            />
            <span>Registrate con Google</span>
          </button>
          <button className="flex p-4 ring-2 ring-blue-500 rounded-md gap-x-4">
            <Image
              src="/temporary/facebook.png"
              className="object-contain"
              width={20}
              height={20}
              alt="login image"
            />
            <span>Registrate con Facebook</span>
          </button>
          <p>Have a problem? <Link href="/" className="underline">contáctanos.</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
