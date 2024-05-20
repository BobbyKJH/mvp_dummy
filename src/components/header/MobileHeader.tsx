import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";

const MobileHeader: React.FC = () => {
  return (
    <nav className="flex md:hidden h-[54px] items-center">
      <RxHamburgerMenu />
    </nav>
  );
};

export default MobileHeader;
