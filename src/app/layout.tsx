"use client";
import "./globals.css";
import { Lato } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <AccountFormProvider>
            {pathname !== "/login" && pathname !== "/dashboard" && <NavBar />}
            {children}
          </AccountFormProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
