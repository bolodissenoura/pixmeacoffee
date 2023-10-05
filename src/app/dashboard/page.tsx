"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

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
      <div className="bg-white w-full h-20 flex align-middle items-center justify-start px-20 md:px-80">
        <div className="flex gap-2">
          <h1 className="text-xl text-gray-900">Dashboard - Boas vindas, </h1>
          {user ? (
            <>
              <h2 className="text-xl text-primary-500">
                {user?.displayName}<span className="text-gray-900">.</span>
              </h2>
            </>
          ) : (
            <>
              <div className="h-6 rounded-sm bg-gray-200 dark:bg-gray-700 w-32 animate-pulse"></div>
            </>
          )}
        </div>
      </div>
      <div className="bg-white w-full h-14 flex justify-between px-20 md:px-80 mt-0.5">
        <div className="flex align-middle items-center">
          <div className="ml-2 h-full flex align-middle items-center border-b-primary-500 border-b-4 border-solid">
            <p className="text-md text-gray-700 hover:bg-gray-100 transition rounded-xl p-2 cursor-pointer">
              Conta
            </p>
          </div>
          <div className="ml-4">
            <p className="text-md text-gray-700 hover:bg-gray-100 transition rounded-xl p-2 cursor-pointer">
              Área Pix
            </p>
          </div>
        </div>
        <div>
          <div className="ml-2 h-full flex align-middle items-center">
            <button onClick={handleLogOut}>
              <p className="text-md text-gray-400 hover:bg-gray-100 transition rounded-xl p-2 cursor-pointer">
                Sair
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
