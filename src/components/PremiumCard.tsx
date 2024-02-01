import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PremiumCard() {
  return (
    <div className="bg-primary-100 py-6 w-full rounded-b-lg md:flex-row flex flex-col justify-center items-center">
      <ul className="w-6/12">
        <h3 className="text-primary-500 text-lg">Coffee premium</h3>
        <li className="flex gap-2 text-textGray">
          <Image src={"check.svg"} alt="coffee" width={16} height={16} />
          <p>Crie cartões ilimitados</p>
        </li>
        <li className="flex gap-2 text-textGray">
          <Image src={"check.svg"} alt="coffee" width={16} height={16} />
          <p>Venda de itens</p>
        </li>
        <li className="flex gap-2 text-textGray">
          <Image src={"check.svg"} alt="coffee" width={16} height={16} />
          <p>Suporte personalizado</p>
        </li>
        <li className="flex gap-2 text-textGray">
          <Image src={"check.svg"} alt="coffee" width={16} height={16} />
          <p>Entre outras vantagens ☕️</p>
        </li>
      </ul>
      <div className="flex flex-col">
        <Image src={"premium.svg"} alt="coffee" width={300} height={300} />
        <Link href={"https://x.com/daniellimae"} target="_blank">
          <div className="flex gap-2 justify-center items-center bold text-primary-500">
            <p>Saiba mais</p>
            <span className="text-2xl">{">"}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
