"use client";
import "./globals.css";
import { Lato } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import React from "react";

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
          {pathname !== "/login" ? <NavBar /> : <></>}
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
