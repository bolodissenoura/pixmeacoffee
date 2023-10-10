import React from "react";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";

interface CardBadgeInterface {
  user: any;
}

export default function CardBadge(props: CardBadgeInterface) {
  return (
    <div className="flex flex-col w-80 bg-transparent">
      <Image
        src="/dash.svg"
        alt="Logo - copo de café azul com logo do pix"
        width={100}
        height={100}
        className="ml-28"
        style={{ marginTop: "-20px", zIndex: "1", marginBottom: "-24px" }}
        priority
      />
      <div className="flex flex-col w-80 h-96 bg-white rounded-2xl shadow-xl">
        <div className="w-full h-8 flex justify-center items-center">
          <div className="bg-gray-300 w-16 h-4 rounded-full shadow-inner"></div>
        </div>
        <p>{props.user?.displayName}</p>
      </div>
    </div>
  );
}
