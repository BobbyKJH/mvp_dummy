"use client";
import React from "react";
import Link from "next/link";

import MobileHeader from "@/components/header/MobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";

const Header: React.FC = () => {
  return (
    <header className="text-lg font-extrabold header sticky top-0 px-8 md:px-16 bg-white shadow-md flex items-center justify-between z-50">
      <h1 className="w-3/12">
        <Link href="/">Mento</Link>
      </h1>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
