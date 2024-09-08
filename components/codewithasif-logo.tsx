import React from "react";
import { lusitana } from "./ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CodewithasifLogo = () => {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center justify-start leading-none text-white gap-2 h-20`}
    >
      <Image src="/logo-cwa-dashboard.png" width={48} height={48} alt="Logo" />
      <p className="lg:text-[44px] text-3xl">Code With Asif</p>
    </div>
  );
};
export default CodewithasifLogo;
