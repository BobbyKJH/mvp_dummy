"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [btn, setBtn] = useState(false);
  return (
    <header className="sticky top-0 right-0 left-0 bg-white p-5 z-50">
      <button className="border-black" onClick={() => setBtn(true)}>
        리스트 버튼
      </button>

      <div className={`relative flex `}>
        <button className={`fixed top-0 left-0 right-0 bottom-0 transition-all duration-300 ${btn ? "bg-[#80808060] z-10 cursor-pointer" : "-z-10 cursor-default"}`} onClick={() => setBtn(false)} />

        <div className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-300 transform -translate-x-full bg-white shadow-lg ${btn && "translate-x-0"}`}>
          <button onClick={() => setBtn(false)}>닫기</button>
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold">Drawer</h2>
            <p className="text-gray-500">This is a drawer.</p>
          </div>

          <Link href={"/home"}>1</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
