import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
          <Topbar />
          <main>
            <LeftSideBar/>

            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            <RightSideBar/>
          </main>
          <Bottombar/>
        </body>
      </html>
  );
}
