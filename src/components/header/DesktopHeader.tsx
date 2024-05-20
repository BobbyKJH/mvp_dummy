// "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopHeader: React.FC = () => {
  const pathName = usePathname();

  const setOnPath = (path: string): boolean => {
    return pathName === "/" + path;
  };

  return (
    <nav className="font-semibold text-lg hidden md:flex">
      <ul className="flex items-center">
        <Link
          href="/oneday"
          className={`text-xs p-4 border-b-2 border-[#808080] ${
            setOnPath("oneday") ? "border-opacity-100 text-[#808080]" : "border-opacity-0"
          } hover:border-opacity-100 hover:text-[#808080] duration-200 cursor-pointer`}
        >
          원데이 클래스
        </Link>
        <Link
          href="/job"
          className={`text-xs p-4 border-b-2 border-[#808080] ${
            setOnPath("job") ? "border-opacity-100 text-[#808080]" : "border-opacity-0"
          } hover:border-opacity-100 hover:text-[#808080] duration-200 cursor-pointer`}
        >
          직업 체험
        </Link>
        <Link
          href="/kit"
          className={`text-xs p-4 border-b-2 border-[#808080] ${
            setOnPath("kit") ? "border-opacity-100 text-[#808080]" : "border-opacity-0"
          } hover:border-opacity-100 hover:text-[#808080] duration-200 cursor-pointer`}
        >
          키트 판매
        </Link>
      </ul>
    </nav>
  );
};

export default DesktopHeader;
