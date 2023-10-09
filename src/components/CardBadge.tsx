import React from "react";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";

interface CardBadgeInterface {
  user: any;
}

export default function CardBadge(props: CardBadgeInterface) {
  return (
    <div className="flex flex-col w-80 h-80 bg-white mt-12 rounded-2xl shadow-xl">
      <div className="w-full h-8 flex justify-center items-center">
        <div className="bg-gray-300 w-16 h-4 rounded-full shadow-inner"></div>
      </div>
      <p>{props.user?.displayName}</p>
    </div>
  );
}
