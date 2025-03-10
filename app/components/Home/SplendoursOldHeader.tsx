"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaMoneyBill, FaSearch } from "react-icons/fa";

export default function SplendoursOldHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
  {/* Upper Bar */}
  <div className="bg-color h-12 flex justify-center items-center relative gap-3 px-4 top-0 pt-2 left-0 w-[100vw] max-w-[100%] z-50">
    <p className="text-sm text-white">
      REGISTER YOUR INFORMATION FOR FREE STONE SAMPLES SENT EXPRESS TO YOU
    </p>
    <button className="bg-white border border-customColor text-color w-[110px] h-[36px] rounded-full text-sm font-medium flex items-center justify-center">
    Click Here
  </button>

  <button className="border border-customColor h-[36px] px-5 text-customColor flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-300">
    <FaMoneyBill className="w-4 h-4" />
    Trade Credit
  </button>
  </div>

  {/* Main Bar */}
  <div className="bg-secondary h-[45px] flex items-center border border-border justify-between px-4 z-40 w-[100vw] max-w-[100%]">
    <p className="text-base flex text-customColor items-center gap-2 px-4 py-2">
      <FaEnvelope className="text-customColor" />
      AUSTRALIA'S NUMBER 1 HIGH END STONE SUPPLIER - AUSTRALIA WIDE DELIVERY
    </p>
    <p className="text-base text-customColor flex items-center gap-2 px-4 py-2">
      <FaMapMarkerAlt className="text-customColor" />
      SHOWROOM: 10/21 COOK ROAD, MITCHAM VIC 3132 TEL: 03 9873 4941
    </p>
    <div className="flex items-center border-l-2 border-border rounded overflow-hidden">
      <div className="w-full h-[45px] flex justify-center items-center bg-secondary cursor-pointer">
        <FaSearch className="text-gray-700 ml-1" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-[160px] h-[45px] px-3 bg-secondary outline-none"
      />
    </div>
  </div>

  {/* Lower Bar */}
  <div
    className={`h-[170px] flex items-center justify-between px-4 w-[100vw] max-w-[100%] z-30 transition-all duration-300 ${
      isScrolled ? "fixed top-0 bg-transparent backdrop-blur-lg" : "bg-color"
    }`}
  >
    {/* Left Side Navigation Links */}
    <div className="flex space-x-8 p-[10px]">
      <div className="flex flex-col items-start">
        <Link href="/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          HOME
        </Link>
        <Link href="https://staging.splendourinstone.com.au/reclaimed-bricks/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          BRICKS
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://staging.splendourinstone.com.au/walling/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          WALLING
        </Link>
        <Link href="https://staging.splendourinstone.com.au/paving/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          PAVING
        </Link>
        <Link href="https://staging.splendourinstone.com.au/cobble-stones/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          COBBLESTONE
        </Link>
      </div>
    </div>

    {/* Center Logo */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
      <Image src="/images/main.png" alt="Main Logo" width={290} height={92} className="mr-2" />
    </div>

    {/* Right Side Navigation Links and Button */}
    <div className="flex space-x-8 items-center p-[10px]">
      <Link href="https://staging.splendourinstone.com.au/about/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
        ABOUT
      </Link>
      <div className="flex flex-col items-start">
        <Link href="https://staging.splendourinstone.com.au/gallery/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          GALLERY
        </Link>
        <Link href="https://staging.splendourinstone.com.au/contact/" className="relative text-lg text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
          CONTACT
        </Link>
      </div>
      <Link href={"https://staging.splendourinstone.com.au/quote/"} className="bg-customColor flex items-center justify-center font-semibold text-color px-4 w-[210px] h-[75px] py-2 rounded-[30px]">
        FREE<br></br>
        MEASURE &
        <br></br>
        QUOTE!
      </Link>
    </div>
  </div>
</div>
  );
}