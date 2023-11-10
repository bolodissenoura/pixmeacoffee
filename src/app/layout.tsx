"use client";
import "./globals.css";
import { Manrope } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import React from "react";
import { AccountFormProvider } from "./context/AccountFormContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AuthContextProvider>
          <AccountFormProvider>{children}</AccountFormProvider>
        </AuthContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
