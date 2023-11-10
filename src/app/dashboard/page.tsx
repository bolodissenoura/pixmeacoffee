"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import CardBadge from "@/components/CardBadge";
import FormAccount from "@/components/FormAccount";
import Image from "next/image";

import {
  AccountForm,
  AccountFormInterface,
} from "../context/AccountFormContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { user, logOut } = UserAuth();
  // I'm not proud of this logic here, but is what we got for MVP :)
  const {
    description,
    setDescription,
    page,
    setPage,
    pixKey,
    setPixKey,
    qrCode,
    setQrCode,
    socialLinks,
    setSocialLinks,
    status,
    setStatus,
    setCity,
    city,
    setName,
    name,
  } = AccountForm();

  const data: AccountFormInterface = {
    setDescription,
    description,
    page,
    setPage,
    pixKey,
    setPixKey,
    qrCode,
    setQrCode,
    socialLinks,
    setSocialLinks,
    status,
    setStatus,
    setCity,
    city,
    setName,
    name,
  };

  const router = useRouter();
  React.useEffect(() => {
    if (user) {
      console.log("signed in!");
    } else if (user == null) {
      router.push("/login");
    }
  }, [router, user]);

  if (!user) {
    return null;
  }
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitForm = async () => {
    try {
      await setDoc(doc(db, "users", user?.uid), {
        description: data.description,
        namepage: data.page,
        pixKey: data.pixKey,
        qrCode: data.qrCode,
        username: user?.displayName,
        photoURL: user?.photoURL,
        city: data.city,
        name: data.name,
        socialLinks: {
          instagram: data.socialLinks.instagram,
          zap: data.socialLinks.zap,
          linkedin: data.socialLinks.linkedin,
          x: data.socialLinks.x,
          twitch: data.socialLinks.twitch,
          sig: data.socialLinks.sig,
        },
        id: user?.uid,
      });
      toast.success("🎉 Página atualizada com sucesso.");
      router.push(`/${data.page}`);
    } catch (error) {
      console.error("Erro ao buscar usuário ou atualizar página:", error);
      toast.error("Não foi possível cadastrar seus ajustes. Tente novamente.");
    }
  };

  const enableButton = status.pageStatus !== "error";

  return (
    <div
      className="bg-primary-50 w-full min-h-screen md:pb-10"
      style={{ backgroundImage: "url(wpp.svg)" }}>
      <DashboardHeader user={user} handleLogOut={handleLogOut} />
      <div className="flex flex-col items-center md:items-start md:flex-row gap-8 w-fullwaiting md:px-40 pb-40 md:pb-0">
        <Image
          src={"cordinha.svg"}
          alt="Foto do usuario"
          className="absolute top-2 left-20 md:left-60 "
          width={300}
          height={300}
          priority
        />
        <CardBadge
          editable
          data={data}
          user={{ username: user?.displayName, photoURL: user.photoURL }}
        />
        <FormAccount
          enableButton={enableButton}
          handleSubmitForm={handleSubmitForm}
          data={data}
          userId={user?.uid}
        />
      </div>
    </div>
  );
}
