import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
  icon: React.ReactNode;
}

const HomeLink: React.FC<Props> = ({ href, title, icon }) => {
  return (
    <Link href={href} className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center border size-12 border-black rounded-full shadow-xl">{icon}</div>

      <h2 className="mt-2 text-xs font-bold">{title}</h2>
    </Link>
  );
};

export default HomeLink;
