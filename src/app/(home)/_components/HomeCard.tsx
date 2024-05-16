import React from "react";
import Link from "next/link";

const HomeCard: React.FC = () => (
  <Link href={"/"} className="relative flex flex-col mx-auto shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm cursor-pointer">
    <div className="h-auto overflow-hidden">
      {/* 수업 이미지 */}
      <img src="https://picsum.photos/400/400" alt="" />
    </div>
    <div className="bg-white py-4 px-3">
      {/* 수업 제목 */}
      <h3 className="text-xs mb-2 font-medium">제목</h3>
      <div className="flex justify-between items-center">
        {/* 수업 설명 */}
        <p className="text-xs text-gray-400 text_overflow">설명</p>
      </div>
    </div>
  </Link>
);

export default HomeCard;
