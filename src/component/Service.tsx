import React from "react";
import PageTopBar from "./PageTopBar";
import { Roboto_Serif } from "next/font/google";
import Image from "next/image";
import ulysses from "@/asset/images/ulysses.png";
import risi_intro from "@/asset/images/risi_intro.png";

const pt = Roboto_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export default function Service() {
  return (
    <div>
      <PageTopBar action="logo" isAbnl />
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
        <div className=" mt-10">
          <h2 className="font-bold text-xl text-white">
            NLP is used by the most successful people
          </h2>
          <h2 className="font-normal text-md italic text-white">
            Businessmen, Politicians, CEOs, Athletes, Celebrities...
          </h2>
          <h2 className="font-normal text-lg mt-10 text-white">
            Right now you have a chance to be in this revolutionary program by:
          </h2>
          <h3 className="font-normal text-sm italic text-white">
            ** The American Board of NLP is the world's largest authority in NLP
          </h3>
          <div className="mt-10">
            <h2 className="p-2 bg-gray-400 text-white text-lg rounded-r-lg md:w-2/5">
              Introducing your trainers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
              <div className="flex flex-row gap-5 flex-wrap mb-10">
                <Image src={ulysses} alt="ulysses" width={200} />
                <div className="text-white">
                  <p>Hi I am Ulysses</p>
                  <p>
                    Author, Speaker, International Master, Coach and Trainer
                  </p>
                  <p>Asia #1 Personal Development Trainer</p>
                  <p>
                    Author, Speaker, International Master, Coach and Trainer
                  </p>
                  <p>American Board of Neuro-Linguistic Programming</p>
                  <p>
                    SINGAPORE | KUALA LUMPUR | HONG KONG | DUBAI | BANGKOK |
                    JOHANNESBURG | MUMBAI | JARKATA | ABU DHABI
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-row gap-5 flex-wrap">
                  <Image src={risi_intro} alt="ulysses" width={200} />
                  <div className="text-white">
                    <p>Hi I am Risi</p>
                    <p>Nicknamed "The Human Mind"</p>
                    <p>Human Behaviour Stategist</p>
                    <p>NIGERIA | USA | LONDON | DUBAI</p>
                    <p>American Board of Neuro-Linguistic Programming</p>
                    <p>
                      Certified facilitator for emotional intelligence,
                      Communication and Diversity (HumanNext, USA)
                    </p>

                    <p>
                      Accreditied Chartered Management Consultant and Trainer
                      (CMD, NIG)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="p-2 mt-10 bg-gray-400 text-white text-lg rounded-r-lg md:w-2/5">
              Why NLP
            </h2>
            <h3 className="font-normal mt-5 text-md text-white w-full sm:w-3/5 md:3/5">
              NLP is a set of tools, processes, techniques and skills that can
              be used to create positive changes in yourself and others.
            </h3>
            <h3 className="font-normal mt-5 text-md text-white w-full">
              You will learn how to:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 mx-10">
              <ul className="list-disc text-white">
                <li className="">
                  Be a powerful and inspirational communicator
                </li>
                <li className="">
                  Be highly skilled with non-verbal communication
                </li>
                <li className="">Master successful habits and be in control</li>
                <li className="">Take control of emotional states</li>
                <li className="">Take control of emotional states</li>
                <li className="">Speed up your learning in any field</li>
                <li className="">Detects pattern in human behaviour</li>
                <li className="">
                  Make dramatic and positive changes in thinking
                </li>
                <li className="">Model characteristics of high achievers</li>
              </ul>
              <ul className="list-disc text-white">
                <li className="">Remove limiting beliefs</li>
                <li className="">Crreate empowering beliefs</li>
                <li className="">Master success mindset</li>
                <li className="">Control state of motivation</li>
                <li className="">Build rapport with anyone</li>
                <li className="">Diffuse tense situations</li>
                <li className="">Defuse tense situations</li>
                <li className="">Use states of mind</li>
                <li className="">Master language</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
