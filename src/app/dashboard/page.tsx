"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";

export default function Dashboard() {
  const { user, googleSignIn } = UserAuth();
  React.useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);
  const handleSignIn = async () => {
    try {
      googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="bg-white w-full h-20 flex align-middle items-center justify-start px-20 md:px-80">
        <h1 className="text-xl text-gray-900">Dashboard</h1>
      </div>
      <div className="bg-white w-full h-14 flex align-middle items-center justify-start px-20 md:px-80 mt-0.5">
        <p className="text-md text-gray-900">Conta</p>
        <p className="text-md text-gray-900">Chaves Pix</p>
      </div>
    </div>
  );
}
