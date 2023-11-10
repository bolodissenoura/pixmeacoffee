import React from "react";
import Image from "next/image";
import { SocialLinksType } from "@/app/context/AccountFormContext";
import SocialLinks from "./SocialLinks";

export interface DataCardInterface {
  page: string;
  pixKey: string;
  description: string;
  socialLinks: SocialLinksType;
}

interface CardBadgeInterface {
  user: { photoURL: string; username: string };
  data: DataCardInterface;
}

export default function CardBadge(props: CardBadgeInterface) {
  return (
    <div className="flex flex-col gap-8 bg-white rounded-2xl shadow-xl p-16 mt-16">
      <div className="flex">
        <div>
          <div className="flex w-full h-16">
            <Image
              src={props.user?.photoURL || ""}
              alt="Foto do usuario"
              className="w-14 h-14 rounded-full cursor-pointer bg-primary-500 p-1"
              width={80}
              height={80}
            />
            <div className="ml-2">
              <p className="w-48 text-xl whitespace-nowrap text-ellipsis overflow-hidden">
                {props.user?.username}
              </p>
              {props.data.page?.length > 0 ? (
                <p className="text text-gray-500">
                  <span className="text-primary-500">/</span>
                  {props.data?.page}
                </p>
              ) : (
                <p className="text text-gray-300">/suapagina</p>
              )}
            </div>
          </div>
          {props.data.description?.length > 0 ? (
            <div className="flex w-full">
              <p
                className="text-sm text-gray-500 font-normal break-words max-w-40 w-60 h-20"
                style={{
                  fontSize: "12px",
                  lineHeight: "1rem",
                  wordWrap: "break-word",
                }}>
                {props.data.description}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            {props.data.pixKey?.length > 20 ? (
              <>
                <Image
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=206x206&data=${props.data.pixKey}`}
                  className="w-40"
                  alt="Pix qr code."
                  width={250}
                  height={250}
                  priority
                />
              </>
            ) : (
              <>
                <Image
                  src={"/waiting.gif"}
                  className="rounded w-40"
                  alt="Gif de garoto azul."
                  width={206}
                  height={206}
                  priority
                />
                <p className="text-sm text-gray-900 ml-4 w-40">
                  Cole a{" "}
                  <span className="text-primary-500">chave aleatória pix</span>{" "}
                  para gerarmos seu qr-code.
                </p>
              </>
            )}
            <button>
              <p>Copiar chave pix</p>
            </button>
            <Image
              src={"pixmeacoffee.svg"}
              alt="Pix me a coffe escrito com coracoes azuis rodeando."
              width={120}
              height={120}
              priority
            />
          </div>
        </div>
      </div>
      <SocialLinks data={props.data.socialLinks} />
    </div>
  );
}
