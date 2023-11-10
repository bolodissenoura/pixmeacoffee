import React from "react";
import Image from "next/image";
import { SocialLinksType } from "@/app/context/AccountFormContext";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export interface DataCardInterface {
  page: string;
  pixKey: string;
  qrCode: string;
  description: string;
  socialLinks: SocialLinksType;
}

interface CardBadgeInterface {
  user: { photoURL: string; username: string };
  data: DataCardInterface;
  editable: boolean;
}

export default function CardBadge(props: CardBadgeInterface) {
  const [pixCopied, setPixCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(props.data.pixKey)
      .then((text) => {
        setPixCopied(true);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };
  return (
    <div className="flex flex-col gap-8 bg-white rounded-2xl  max-w-40 w-96 shadow-xl p-16 mt-16">
      <div className="flex flex-col gap-8 ">
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
                className="text-sm text-gray-500 font-normal break-words max-w-40 w-96 w- h-20"
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
            {props.data.qrCode?.length > 20 ? (
              <>
                <Image
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=206x206&data=${props.data.qrCode}`}
                  className="w-40"
                  alt="Pix qr code."
                  width={250}
                  height={250}
                  priority
                />
              </>
            ) : (
              <>
                {props.editable ? (
                  <>
                    <Image
                      src={"/empty-qrcode.svg"}
                      className="rounded w-40"
                      alt="Gif de garoto azul."
                      width={206}
                      height={206}
                      priority
                    />
                    <div className="flex text-sm flex-col gap-0  ml-4 w-full">
                      <p className="text-sm">
                        Seu qr-code aparecerá aqui. <br />
                      </p>
                      <Link
                        href="https://letmegooglethat.com/?q=como+gerar+o+qr-code+no+meu+banco+pelo+app+%3F"
                        target="_blank"
                        className="text-primary-500">
                        como gerar QR-code no meu banco?
                      </Link>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
            {props.data.pixKey ? (
              <>
                {pixCopied ? (
                  <>
                    <div className="flex">
                      <p className="text-sm w-full text-center text-secondary-400 bold">
                        pix copiado
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#2D5BFF"
                        viewBox="0 0 256 256">
                        <path d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26Zm-8.33,135.21-35-35,13.16-36.21,58.05,58.05Zm-55,20,14-38.41,24.45,24.45ZM156,168.64,87.36,100l13-35.87,91.43,91.43ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"></path>
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleCopy}
                      className="text-sm w-full text-center text-primary-500 bold ">
                      copie meu pix
                    </button>
                  </>
                )}

                <div className="flex w-full gap-1">
                  <input
                    type="text"
                    id="pixkey"
                    value={props.data.pixKey}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-primary-500 w-10/12 md:w-12/12 focus:border-primary-500 block h-8"
                    placeholder="Chave pix"
                    disabled
                  />
                  <button
                    onClick={handleCopy}
                    className="bg-gray-50 border border-gray-300 rounded-r-lg h-8 flex justify-center items-center">
                    <Image
                      src={"/copy.svg"}
                      alt="copy icon"
                      width={20}
                      height={20}
                      priority
                    />
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
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
