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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

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
  };
  // this initial data will come on GET from database
  const [showButton, setShowButton] = React.useState<boolean>(false);

  const router = useRouter();
  React.useEffect(() => {
    if (user) {
      console.log("signed in!");
    } else if (user == null) {
      router.push("/login");
    }
  }, [router, user]);

  if (!user) {
    // user is signed out or still being checked.
    // don't render anything
    return null;
  }
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const postRef = collection(db, "users");

  const handleSubmitForm = async () => {
    const cardData = {
      description: data.description,
      namepage: data.page,
      pixKey: data.pixKey,
    };
    await addDoc(postRef, {
      cardData,
      username: user?.displayName,
      id: user?.uid,
    });
    console.log(cardData);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen md:pb-10">
      <DashboardHeader user={user} handleLogOut={handleLogOut} />
      <div className="flex flex-col items-center md:items-start md:flex-row gap-8 w-full md:px-40 pb-40 md:pb-0">
        <CardBadge data={data} user={user} />
        <FormAccount data={data} />
        <PublishBtn
          showButton={showButton}
          handleSubmitForm={handleSubmitForm}
        />
      </div>
    </div>
  );
}
