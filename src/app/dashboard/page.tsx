"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import CardBadge from "@/components/CardBadge";

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
    <div className="bg-gray-100 w-full h-screen">
      <DashboardHeader user={user} handleLogOut={handleLogOut} />
      <div className="flex w-full md:px-80">
        <CardBadge user={user} />
      </div>
    </div>
  );
}
