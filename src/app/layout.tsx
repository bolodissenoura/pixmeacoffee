import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";

const inter = Lato({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Pix me a coffee",
  description: "Doe para seu criador favorito via PIX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full px-20 absolute">
          <Image
            src="/logo-blue.svg"
            alt="Logo - copo de café azul com logo do pix"
            width={60}
            height={60}
            priority
          />
        </header>
        {children}
      </body>
    </html>
  );
}
