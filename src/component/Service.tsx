import React from "react";
import PageTopBar from "./PageTopBar";
import { Roboto_Serif } from "next/font/google";
import Image from "next/image";
import core_capabilities from "@/asset/images/core capabilities.png";
import data from "@/asset/json/menu.json";

const pt = Roboto_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export default function Service() {
  return (
    <div>
      <PageTopBar action="telescope" />
      <div className="mt-16 mx-4 mb-10">
        <h2 className={`text-white font-normal text-2xl ${pt.className}`}>
          WELCOME TO WISEMAN ASSOCIATES
        </h2>
        <div className="mt-5 text-white tracking-wide">
          Wiseman is committed to delivering educational tools which will help
          further businesses strong commitment to best practices in upholding
          the highest standards of business ethics and workplace behaviour and
          in honouring the spirit of laws under which they operate locally and
          globally
        </div>
        <div className="flex flex-row items-center justify-center mt-10 mx-4">
          <Image src={core_capabilities} alt="" />
        </div>
        <div className=" mt-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <span className="bg-gray-300 h-[3px] w-1/3"></span>
            <span className="text-white font-normal text-xl">Testimonials</span>
            <span className="bg-gray-300 h-[3px] w-1/3"></span>
          </div>
          <div className="mt-10 space-y-4">
            {data.testimonials.map(({ id, message, client }) => (
              <div
                className="flex flex-col items-center justify-center gap-3 text-white leading-5"
                key={id}
              >
                <div className="text-xl italic">"{message}"</div>
                <div className="font-bold text-2xl">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
