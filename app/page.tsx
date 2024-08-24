"use client";

import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-screen w-full bg-[#f1f0f0] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/logo.svg"}
            alt="MarketMinds Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-[#2F2121]">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-[#2F2121]"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-[#2F2121]"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarantee"
              smooth={true}
              className="hover:text-[#2F2121]"
            >
              Guarantee
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:+919876543210" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (987)-654-3210
            </button>
          </a>

          <Link
            href={"/meeting"}
            className="px-6 py-3 rounded-md uppercase hover:bg-gray-100 hover:text-black border border-black text-white bg-black transition duration-200 text-sm 
          hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />
        </div>
        <h1>
          <CoverDemo />
        </h1>

        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
          Schedule a meeting with our team to discuss your project and get
          started on the right path.
        </p>

        <div className="flex md:justify-center items-center gap-x-4">
          <Link
            href="/meeting"
            className="py-3 
            px-10 md:px-16 md:text-xl hover:bg-[#5891eb] rounded-[6px] border border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book a Call
          </Link>
          <Link
            href={"/showcase"}
            className="
              bg-white py-3 px-10 md:px-16 md:text-xl border border-black rounded-[6px] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Showcase
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-gray-700" />
              Planning
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-gray-700" />
              Design
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-gray-700" />
              Development
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-gray-700" />
              Production
            </p>
          </BoxReveal>
        </div>

        <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
          <div className="md:w-2/5">
            <h1 className="text-2xl font-medium text-gray-600 w-4/5">
              Trusted by fast moving brands worldwide
            </h1>

            <div className="flex my-6 gap-x-5 w-full">
              <div>
                <h1 className="text-blue-600 text-3xl md:text-5xl">
                  <NumberTicker value={100} /> +
                  <p className="text-gray-500 text-sm md:text-md">
                    Happy Clients
                  </p>
                </h1>
              </div>

              <div className="w-px bg-gray-300 self-stretch"></div>

              <div className="flex-1 min-w-0">
                <h1 className="text-blue-600 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                  <NumberTicker value={10} /> +
                  <p className="text-gray-500 text-sm md:text-md">
                    Projects Completed
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
