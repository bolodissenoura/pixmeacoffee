import React from "react";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";

export default function NavBar() {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
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
        {!user ? (
          <>
            <a
              className="btn btn-ghost text-gray-900 normal-case"
              href="/login">
              Entrar
            </a>
            <a
              className="py-2 px-4 text-white bg-primary-500 normal-case rounded hover:scale-105"
              href="/login">
              Cadastre-se
            </a>
          </>
        ) : (
          <>
            <div className="flex gap-4">
              <Image
                src={user?.photoURL}
                alt="Logo - copo de café azul com logo do pix"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                width={60}
                height={60}
                priority
              />
              <button onClick={handleLogOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#111827"
                  viewBox="0 0 256 256">
                  <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
