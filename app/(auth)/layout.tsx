// This will allow me to specify different rules for the authentication routes
// Adding an SEO

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Medrin Blogs",
  description: "A Next.js 13 Medrin blogs application",
};

// Adding fonts to be accessible
const inter = Inter({ subsets: ["latin"] });
// Children is used to display something within it
// Type of child for definition
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* inter.className is for the import of fonts */}
        <body className={`${inter.className} bg-dark-1`}>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
