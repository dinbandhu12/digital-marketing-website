import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectNavbar = () => {
  return (
    <div className="overflow-hidden p-10 rounded-[6px] top-5 sticky md:mx-auto z-50 lg:w-4/5 2xl:w-[68%] bg-gray-200 flex items-center justify-between px-4 md:px-8 mx-6">
      <Link href="/">
        <Image
          src={"/logo/logo.svg"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          <Link href={"/projects"} className="hover:text-[#2F2121]">
            Projects
          </Link>
          <Link href={"/services"} className="hover:text-[#2F2121]">
            Services
          </Link>
          <Link href={"/process"} className="hover:text-[#2F2121]">
            Process
          </Link>
          <Link href={"/guarentees"} className="hover:text-[#2F2121]">
            Guarentees
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        {/* <a href="tel:+919876543210" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (987)-654-3210
            </button>
          </a> */}
        <Link
          href={"/meeting"}
          className="px-6 py-3 rounded-md uppercase hover:bg-gray-100 hover:text-black border border-black text-white bg-black transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default ProjectNavbar;
