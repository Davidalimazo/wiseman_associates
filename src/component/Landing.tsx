import React from "react";
import headerimg from "@/asset/images/headerimg.png";
import serviceimg from "@/asset/images/serviceimg.png";
import Image from "next/image";
import { PT_Serif } from "next/font/google";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import Link from "next/link";

const inter = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full mt-5 mb-20">
      <div className="">
        <Image src={headerimg} alt="" />
      </div>
      <div className="">
        <Image src={serviceimg} alt="" />
      </div>
      <div className={`flex flex-col gap-3`}>
        <div
          className={`text-3xl tracking-[.25em] ${inter.className} sm:text-5xl text-white`}
        >
          COMPANY PROFILE
        </div>
        <div className="text-center text-white font-semibold text-xl tracking-wider">
          <div className="">
            Focused excellence in <span className="text-yellow-400">Your</span>{" "}
            world
          </div>
          <div className="">Take the next steps with us</div>
        </div>
      </div>
      <div className="mt-10">
        <Link href="/service">
          <TbPlayerTrackNextFilled className="text-white text-4xl animate-pulse cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
