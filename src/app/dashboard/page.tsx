"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import CardBadge from "@/components/CardBadge";
import FormAccount from "@/components/FormAccount";

export default function Dashboard() {
  const { user, logOut } = UserAuth();
  const router = useRouter();
  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-100 w-full md:h-screen">
      <DashboardHeader user={user} handleLogOut={handleLogOut} />
      <div className="flex flex-col items-center md:flex-row gap-8 w-full md:px-80">
        <CardBadge user={user} />
        <FormAccount />
      </div>
    </div>
  );
}
