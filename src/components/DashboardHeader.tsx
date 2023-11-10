import React from "react";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";

interface DashboardHeaderInterface {
  user: any;
  handleLogOut: () => void;
}

export default function DashboardHeader(props: DashboardHeaderInterface) {
  return (
    <header>
      <div
        style={{ zIndex: "9" }}
        className="bg-white relative w-full h-24 flex justify-between px-20 md:px-40 mt-0.5">
        <div></div>
        <div className="flex align-middle items-center">
          <div className="ml-2 h-full flex align-middle items-center border-b-primary-500 border-b-4 border-solid">
            <Image
              src={"logo-blue.svg"}
              alt="Foto do usuario"
              width={36}
              height={36}
              priority
            />
            <p className="text-md text-gray-700 hover:bg-gray-100 transition rounded-xl p-2 cursor-pointer">
              Pixmeacoffee
            </p>
          </div>
        </div>
        <div>
          <div className="ml-2 h-full flex align-middle items-center">
            <button onClick={props.handleLogOut} className="flex gap-2 justify-center">
              <Image
                src={"sair.svg"}
                alt="Icone de escadas"
                width={16}
                height={16}
                priority
              />
              <p className="text-md">sair</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
