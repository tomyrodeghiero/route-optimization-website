import React, { useState, useEffect } from "react";
// import next image
import Image from "next/image";
// import next link
import Link from "next/link";

// import components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ headerData, navData }) => {
  // header state
  const [header, setHeader] = useState(false);
  // navMovile state
  const [navMobile, setNavMobile] = useState(false);

  // destructure header data
  const { logoImgV1, logoImgV2, btnText } = headerData;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed w-full left-0 right-0 mx-auto max-w-[90vh] lg:max-w-[1120px] <-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* logo v1 */}
      <Link href={"/"}>
        <a>
          <Image src={logoImgV2} width={112.5} height={56.25} alt="Image" />
        </a>
      </Link>
      {/* nav & button wrapper - initially hidden */}
      <div className="hidden lg:flex gap-x-[96px]">
        {/* nav */}
        <Nav navData={navData} header={header} />
        {/* btn */}
        <button className="btn">{btnText}</button>
        {/* nav menu button - hide on large screens */}
      </div>
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden cursor-pointer"
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>
      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
