import PageTopBar from "@/component/PageTopBar";
import React from "react";
import Image from "next/image";
import kemi_comments from "@/asset/images/kp_san.png";
import tesimonials_with_text from "@/asset/images/tesimonials_with_text.png";
import core_capabilities from "@/asset/images/core capabilities.png";
import data from "@/asset/json/menu.json";

export default function About() {
  return (
    <div className="min-h-scree">
      <div className="bg-white mb-10">
        <PageTopBar action="leadership" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20 mx-4">
          <div className="space-y-4">
            <h2 className="font-semibold">INTRODUCTION</h2>
            <div className="text-justify">
              <span className="font-semibold">Wiseman Associates,</span> a firm
              of Legal Practitioners, Compliance and Ethics (C&E), Consultancy
              and Training, was established as a result of our concerns on how
              businesses manage adherence to the ever-changing legal and
              compliance legislation and corporate culture and yet still
              maintain their focus on the key deliverables of their business
            </div>
            <div className="text-justify">
              In today's business environment due to current economic,
              regulatory and social climate organizations are becoming
              increasing exposed to governance, compliance and ethical risks
              daily.
            </div>
            <div className="text-justify">
              The whole industry spectrum is alert to the fact that regulatory
              compliance is an issue for all. Corporate governance, compliance
              management and integrity are now a top business priority
            </div>
          </div>
          <div className="space-y-4 text-justify">
            <p>So what gives Wiseman the competitive edge?</p>
            <p>
              It's a combination of responsive personal service and a focused
              approach to providing clients with the specialist expertise in
              compliance, ethical and human performance improvements they need
              to achieve their business objectives.
            </p>
            <p>
              <span className="font-semibold">Wiseman</span> recognises that
              organizations work best when there's a good match between their
              structures, systems and the capabilities of their workforce. We
              work with organizations on expanding the abilitie and horizons of
              their people
            </p>
          </div>
        </div>
        <div className="mx-4 mt-10 space-y-4">
          <h2 className="font-semibold">WHO WE ARE</h2>
          <p className="text-justify">
            Wiseman Associates was established from the desire to build value
            for clients through enabling and promoting strong ethical business
            practices by changing business ethos and demonstrating a
            commonitment to collaborative workplace culture.
          </p>
        </div>
        <div className="mx-4 mt-10 space-y-4 mb-10">
          <h2 className="font-semibold">HOW WISEMAN CAN HELP</h2>
          <p className="text-justify">
            Wiseman, through our result-oriented capacity building
            'programmes-for-life' training courses and innovative approach to
            learning provide regulatory, compliance and ethics education for a
            wide range of industries and backgrounds. Thereby enabling and
            equipping the C21st business to exceed their professional and
            personal goals and also to meet their specific compliance needs,
            awaresness initiatives and ethical standards. Wiseman, in effect,
            promote and improve human performance.
          </p>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20">
        <h2 className="font-bold text-2xl text-white">
          Comments on Wiseman seminars:
        </h2>
        <h3 className="font-semibold mt-2 text-lg text-white">
          Mr Kemi Pinheiro, SAN, MCI Arb, has this to say..
        </h3>
        <div className="flex flex-row items-center justify-center mt-10">
          <Image src={kemi_comments} width={500} alt="Kemi Pinheiro" />
        </div>
        <div className="flex flex-row items-center justify-center mt-10">
          <Image src={tesimonials_with_text} alt="Testimonials" />
        </div>
        <div className="flex flex-row items-center justify-center mt-10 mx-4">
          <Image src={core_capabilities} width={500} alt="" />
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
