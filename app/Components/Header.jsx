import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" px-10 lg:px-32 xl:px-48 2xl:px-56 flex justify-between items-center shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={180} height={180} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
