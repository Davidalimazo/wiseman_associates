"use client";

import React, { useState } from "react";
import WisemanAssociatesLogo from "@/asset/images/WisemanAssociatesLogo.png";
import Image from "next/image";
import menu from "@/asset/json/menu.json";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Header() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="w-full h-[72px] py-4 relative">
      <div
        className={`flex flex-row items-center justify-between px-4 ${inter.className}`}
      >
        <div className="">
          <Image
            src={WisemanAssociatesLogo}
            alt="Wiseman Associates Logo"
            width={200}
            height={60}
          />
        </div>
        <div className="hidden sm:flex flex-row items-center gap-4">
          {menu.menu.map(({ id, link, route }) => (
            <Link
              href={link}
              className={`text-white font-semibold text-lg target:underline ${
                pathname === link ? "bg-[#A9A8A7] px-4 py-2 rounded-lg" : null
              }`}
              key={id}
              onClick={() => setIsMobile(false)}
            >
              {route}
            </Link>
          ))}
        </div>
        {isMobile ? (
          <FaTimes
            className="block sm:hidden text-white font-bold transition-all"
            size="30px"
            onClick={() => setIsMobile(false)}
          />
        ) : (
          <RxHamburgerMenu
            className="block sm:hidden text-white font-bold transition-all"
            size="30px"
            onClick={() => setIsMobile(true)}
          />
        )}
      </div>
      {isMobile && (
        <div className="mx-3 bg-white z-50 rounded-md mt-5 flex flex-col items-center absolute top-[74px] w-[95%]">
          {menu.menu.map(({ id, link, route }) => (
            <Link
              href={link}
              className={`text-[#4F4D4D] py-2 border-b-2 border-b-gray-400 w-full text-center hover:bg-[#4F4D4D] hover:text-white ${
                pathname === link ? "bg-[#A9A8A7] px-4 py-2 text-white" : null
              }`}
              key={id}
              onClick={() => setIsMobile(false)}
            >
              {route}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
