"use client";
import React from "react";
import Image from "next/image";
import { UserAuth } from "@/app/context/AuthContext";
import { Router } from "next/router";

export default function Login() {
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
    <div className="bg-primary-500">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://cdn.discordapp.com/attachments/1082297301072105544/1158249710277120091/pexels-mart-production-8885381.jpg?ex=651b8f9a&is=651a3e1a&hm=80f09b245009266f80c7cf3d63a415066d3915b627ca06a618a24e924bef2336&)",
          }}>
          <div className="flex items-center h-full px-20 bg-primary-500 bg-opacity-40"></div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1 bg-white px-10 py-20 rounded-xl">
            <div>
              <div className="flex justify-center mx-auto">
                <Image
                  src="/logo-blue.svg"
                  alt="Logo - copo de café azul com logo do pix"
                  width={60}
                  height={60}
                  priority
                />
              </div>

              <p className="mt-3 font-bold text-xl">
                Crie uma conta, <br /> comece a receber doações{" "}
                <span className="text-primary-500">Pix</span>.
              </p>
              <p className="text-gray-500 mt-4">
                Não perca tempo e dinheiro, <br /> entre com sua conta Google.
              </p>
            </div>
            <button
              onClick={handleSignIn}
              className="flex items-center justify-center px-6 py-3 mt-4 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 hover:bg-gray-50 w-full">
              <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span className="mx-2">Login com o Google</span>
            </button>
            <p className="text-gray-400 mt-4">
              Criando uma conta, você concorda com todos os nossos Termos e
              Condições.
            </p>
            <p className="text-primary-400 mt-4">Termos e Condições</p>
          </div>
        </div>
      </div>
    </div>
  );
}
