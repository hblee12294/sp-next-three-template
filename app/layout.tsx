import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SP Next 3",
  description: "A template of using shader-park, Three.js and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
