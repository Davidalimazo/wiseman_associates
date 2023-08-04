import React from "react";
import wiseman_telescope from "@/asset/images/wiseman_telescope.png";
import target_arrow_cirlce from "@/asset/images/target_arrow_cirlce.png";
import wiseman_with_arrow from "@/asset/images/wiseman_with_arrow.png";
import { StaticImageData } from "next/image";

export default function PageTopBar({ action }: { action: string }) {
  const actions: Record<string, StaticImageData> = {
    telescope: wiseman_telescope,
    target: target_arrow_cirlce,
    leadership: wiseman_with_arrow,
  };
  return (
    <div className="bg-[#716D6D] h-[150px] w-full mt-20 flex flex-row items-center justify-between relative">
      <div className="text-white hidden sm:block text-start text-sm font-normal sm:text-xl tracking-wider ml-4">
        <div className="">
          Focused excellence in <span className="text-yellow-400">Your</span>{" "}
          world
        </div>
        <div className="">Take the next steps with us</div>
      </div>

      <div
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full shadow-md sm:mr-10 ml-36"
        style={{
          backgroundImage: `url(${actions[action].src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "250px",
          height: "250px",
        }}
      ></div>
    </div>
  );
}
