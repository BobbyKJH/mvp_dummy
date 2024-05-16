import React from "react";

import HomeLink from "@/app/(home)/_components/HomeLink";
import HomeCard from "@/app/(home)/_components/HomeCard";
import HomeSwiper from "@/app/(home)/_components/HomeSwiper";

import { MdPerson } from "react-icons/md";

const HomePage: React.FC = () => {
  return (
    <div>
      <HomeSwiper />

      <div className="grid grid-cols-4 mx-auto max-w-[1000px] my-10">
        <HomeLink href="/" title="멘토" icon={<MdPerson color="red" />} />
        <HomeLink href="/" title="멘토" icon={<MdPerson />} />
        <HomeLink href="/" title="멘토" icon={<MdPerson />} />
        <HomeLink href="/" title="멘토" icon={<MdPerson />} />
      </div>

      <div className="grid mx-auto my-4 w-full sm:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1000px]">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default HomePage;
