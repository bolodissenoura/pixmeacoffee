import React from "react";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";

export default function NavBar() {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full md:px-96 absolute flex justify-between items-center">
      <Image
        src="/logo-blue.svg"
        alt="Logo - copo de café azul com logo do pix"
        width={60}
        height={60}
        priority
      />
      <div className="px-4 flex gap-4 items-center">
        <a className="btn btn-ghost text-gray-900 normal-case" href="/login">
          Entrar
        </a>
        <a
          className="py-2 px-4 text-white bg-primary-500 normal-case rounded hover:scale-105"
          href="/login">
          Cadastre-se
        </a>
      </div>
    </header>
  );
}
