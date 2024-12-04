import type { Metadata } from "next";
import Image from "next/image";
import { Nunito } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-100"}>
        <div className="max-w-2xl mx-auto my-8">
          <header className="flex flex-col items-center">
            <Image
              alt="logo"
              className="rounded-full"
              height={150}
              width={150}
              src="/logo.png"
            />
            <span className="my-4 text-4xl">
              My Blog
            </span>
          </header>
          <Nav />
          <main className="bg-white p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
