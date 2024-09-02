import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col items-center gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Link href="/">
            <Image
              src={"/logo/logo.svg"}
              width={1000}
              height={1000}
              className="w-40"
              alt="image"
            />{" "}
          </Link>
        </h1>
        <p className="text-center text-md text-gray-400">123-456-7890  <br /> admin@marketminds.com </p>
      </div>

      <div className="flex md:justify-center text-sm gap-x-4 mt-10">
        © 2024 MarketMinds. All Rights Reserved.
        <Link href="/pagenotfound" className="text-blue-700">
          Privacy Policy
        </Link>
        <Link href="/pagenotfound" className="text-blue-700">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
