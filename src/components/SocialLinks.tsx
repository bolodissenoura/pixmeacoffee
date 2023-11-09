import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DataCardInterface } from "./CardBadge";

interface SocialLinksInterface {
  data: DataCardInterface;
}

export default function SocialLinks(props: SocialLinksInterface) {
  return (
    <>
      {props.data.socialLinks?.length > 0 ? (
        <>
          <div className="w-full h-12">
            <div className="flex justify-center items-center w-full gap-8 h-12 cursor-pointer">
              {props.data.socialLinks[0]?.value?.length > 10 ? (
                <>
                  <Link
                    key={props.data.socialLinks[0].name}
                    href={props.data.socialLinks[0].value}>
                    <Image
                      src="/social/instagram.svg"
                      alt="Social media icone"
                      width={32}
                      height={32}
                    />
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
