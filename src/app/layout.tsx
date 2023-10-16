"use client";
import "./globals.css";
import { Lato } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import React from "react";
import { AccountFormProvider } from "./context/AccountFormContext";

const inter = Lato({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <AccountFormProvider>{children}</AccountFormProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
