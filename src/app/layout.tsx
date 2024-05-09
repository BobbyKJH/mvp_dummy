import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "@/app/globals.css";

import { Mento } from "@/utils/type";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mento & Mentee",
  description: "멘토와 멘티가 되어 서로를 다양한 것을 배워가는 앱",
};

const RootLayout: React.FC<Mento.Layout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
