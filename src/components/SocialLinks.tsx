import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialLinksType } from "@/app/context/AccountFormContext";

interface SocialLinksInterface {
  data: SocialLinksType;
}

export default function SocialLinks(props: SocialLinksInterface) {
  return (
    <>
      <div className="flex gap-8 w-full justify-center">
        {props.data?.instagram ? (
          <>
            <Link
              href={`https://www.instagram.com/${props.data?.instagram}`}
              target="_blank">
              <Image
                src={"/social/instagram.svg"}
                alt="Instagram icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {props.data?.zap ? (
          <>
            <Link
              href={`https://api.whatsapp.com/send?phone=${props.data?.zap}`}
              target="_blank">
              <Image
                src={"/social/zap.svg"}
                alt="Whatsapp icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {props.data?.linkedin ? (
          <>
            <Link
              href={`https://www.linkedin.com/in/${props.data?.linkedin}`}
              target="_blank">
              <Image
                src={"/social/linkedin.svg"}
                alt="Linkedin icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {props.data?.x ? (
          <>
            <Link
              href={`https://x.com/${props.data?.x}`}
              target="_blank">
              <Image
                src={"/social/x.svg"}
                alt="X icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {props.data?.twitch ? (
          <>
            <Link
              href={`https://www.twitch.tv/${props.data?.twitch}`}
              target="_blank">
              <Image
                src={"/social/twitch.svg"}
                alt="Twitch icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {props.data?.sig ? (
          <>
            <Link
              href={`https://biome.sigcoding.com/${props.data?.sig}`}
              target="_blank">
              <Image
                src={"/social/sig.svg"}
                alt="Sig icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        {props.data?.youtube ? (
          <>
            <Link
              href={`https://www.youtube.com/${props.data?.youtube}`}
              target="_blank">
              <Image
                src={"/social/youtube.svg"}
                alt="Youtube icon."
                width={32}
                height={32}
                priority
              />
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
