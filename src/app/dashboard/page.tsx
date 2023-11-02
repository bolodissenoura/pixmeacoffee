"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import CardBadge from "@/components/CardBadge";
import FormAccount from "@/components/FormAccount";
import {
  AccountForm,
  AccountFormInterface,
} from "../context/AccountFormContext";
import PublishBtn from "@/components/PublishBtn";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { user, logOut } = UserAuth();
  const {
    description,
    setDescription,
    page,
    setPage,
    pixKey,
    setPixKey,
    socialLinks,
    setSocialLinks,
    status,
    setStatus,
  } = AccountForm();

  const data: AccountFormInterface = {
    setDescription,
    description,
    page,
    setPage,
    pixKey,
    setPixKey,
    socialLinks,
    setSocialLinks,
    status,
    setStatus,
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
        username: user?.displayName,
        photoURL: user?.photoURL,
        id: user?.uid,
      });
      toast.success("🎉 Página atualizada com sucesso.");
      router.push(`/${data.page}`);
    } catch (error) {
      console.error("Erro ao buscar usuário ou atualizar página:", error);
      toast.error("Não foi possível cadastrar seus ajustes. Tente novamente.");
    }
  };

  const showButton =
    status.pageStatus !== "error" && status.pixKeyStatus !== "error";

  return (
    <div className="bg-gray-300 w-full min-h-screen md:pb-10">
      <DashboardHeader user={user} handleLogOut={handleLogOut} />
      <div className="flex flex-col items-center md:items-start md:flex-row gap-8 w-fullwaiting md:px-40 pb-40 md:pb-0">
        <CardBadge
          data={data}
          user={{ username: user?.displayName, photoURL: user.photoURL }}
        />
        <FormAccount data={data} userId={user?.uid} />
        <PublishBtn
          showButton={showButton}
          handleSubmitForm={handleSubmitForm}
        />
      </div>
    </div>
  );
}
