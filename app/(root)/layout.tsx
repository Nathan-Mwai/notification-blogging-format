import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medrin Blogs",
  description: "A Next.js 13 Medrin blogs application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <html lang='en'>
        <body className={inter.className}>
          <ClerkProvider>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar/>

            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            <RightSidebar/>
          </main>
          <Bottombar/>
          </ClerkProvider>
        </body>
      </html>
  );
}
