import React from "react";
import { lusitana } from "./ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const CodewithasifLogo = () => {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px] ">Code With Asif</p>
    </div>
  );
};
export default CodewithasifLogo;
