"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import CardBadge from "@/components/CardBadge";

export default function Profile() {
  const db = getFirestore();
  const pathname = usePathname();
  const usersCollection = collection(db, "users");

  const [pageData, setPageData] = React.useState({
    status: "loading",
    data: {
      page: "",
      pixKey: "",
      qrCode: "",
      description: "",
      socialLinks: {
        instagram: "",
        zap: "",
        linkedin: "",
        x: "",
        twitch: "",
        sig: "",
        youtube: "",
      },
    },
    username: "",
    photoURL: "",
  });

  React.useEffect(() => {
    const q = query(
      usersCollection,
      where("namepage", "==", pathname.slice(1))
    );
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("Nenhum usuário encontrado com esse username.");
          setPageData({ ...pageData, status: "error" });
        } else {
          querySnapshot.forEach((doc) => {
            setPageData({
              status: "success",
              data: {
                page: doc.data().namepage,
                pixKey: doc.data().pixKey,
                qrCode: doc.data().qrCode,
                description: doc.data().description,
                socialLinks: doc.data().socialLinks,
              },
              username: doc.data().username,
              photoURL: doc.data().photoURL,
            });
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
        setPageData({ ...pageData, status: "error" });
      });
    getDocs(q);
  }, []);
  return (
    <div
      className="bg-primary-50 w-full flex justify-center min-h-screen md:pb-10"
      style={{ backgroundImage: "url(wpp.svg)" }}>
      {pageData.status === "success" ? (
        <div className="flex flex-col gap-8">
          <CardBadge
            editable={false}
            data={pageData?.data}
            user={{
              username: pageData?.username,
              photoURL: pageData?.photoURL,
            }}
          />
          {/* <Link href={"/login"}>
            <div className="rounded-full bg-primary-500 py-2 md:px-4 px-2 text-white text-center">
              Criar minha página 100% grátis
            </div>
          </Link> */}
        </div>
      ) : (
        <></>
      )}
      {pageData.status === "error" ? (
        <>
          <div className="flex flex-col text-center justify-center items-center gap-4">
            <p className="text text-black">Essa página ainda não existe.</p>
            <p className="text text-black">
              Aproveite e tenha sua página pixmeacoffee com esse nome!
            </p>
            <Image
              src={"/bug.gif"}
              className="rounded"
              alt="Inseto com a barriga pra cima."
              width={150}
              height={150}
              priority
            />

            <Link href={"/login"}>
              <div className="rounded-full bg-primary-500 py-2 md:px-4 px-2 text-white">
                Criar minha página 100% grátis
              </div>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
      {pageData.status === "loading" ? (
        <>
          <div className="border border-primary-500 shadow h-96 rounded-md p-4 max-w-sm w-full mx-auto mt-20">
            <div className="animate-pulse flex space-x-2">
              <div className="rounded-full bg-primary-500 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-primary-500 rounded"></div>
                <div className="h-2 bg-primary-500 rounded"></div>
              </div>
            </div>
            <div className="h-2 bg-primary-500 rounded mt-14"></div>
            <div className="h-2 bg-primary-500 rounded mt-2"></div>
            <div className="h-40 bg-primary-500 rounded mt-14"></div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
