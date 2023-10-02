"use client";
import "./globals.css";
import { Lato } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import NavBar from "@/components/NavBar";

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
          {window.location.pathname !== "/login" ? <NavBar /> : <></>}
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
