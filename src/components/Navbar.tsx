"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const path = usePathname();

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  const NavData = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Certificates", link: "/certificates" },
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleMenu = () => setMenuToggle((prevState) => !prevState);

  const isCurrentPath = (link: string) =>
    path === link ? "text-green-400" : "";

  return (
    <nav className={`sticky top-0 left-0 w-full z-40 backdrop-blur-xl text-gray-500 shadow duration-300 ease-in-out ${scrolling && 'transform transition-transform duration-200 ease-in-out -translate-y-12'}`}>
      <div
        className={`w-full flex justify-between items-center pr-5 mx:px-5 scroll-py-24 md:px-10 lg:px-20 my-5 ${scrolling ? 'mt-12 mb-0' : ''}`}
      >
        <div className={`drop-shadow-xl`}>
          <Link href="/"> 
            <Image
              className={` drop-shadow-sm noDrag w-32 h-15 md:w-60 md:h-24 object-cover ${scrolling ? 'transform transition-transform scale-[0.8] duration-200 ease-in-out my-0' : ''}`}
              src="/main_logo.png"
              width={10000}
              height={10000}
              priority={true}
              alt="logo"
              onContextMenu={(e) => e.preventDefault()}
            />
          </Link>
        </div>

        <ul className="md:flex gap-x-4 lg:gap-x-10 hidden md:visible duration-200">
          {NavData.map((data, ind) => (
            <li
              key={ind}
              className={`cursor-pointer font-main tracking-widest text-base ${scrolling ? 'transform transition-transform scale-[0.9] duration-200 ease-in-out -my-2' : ''} lg:text-lg list-none outline-none hover:text-green-300 duration-150 ${isCurrentPath(
                data.link
              )}`}
            >
              <Link href={data.link}>{data.name}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-50">
          {menuToggle ? (
            <X className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {menuToggle && (
        <div
          id="navbar"
          className={`md:hidden animate-leftright z-40 drop-shadow-sm fixed top-0 right-0 min-w-[65%] rounded-s-xl min-h-[100vh] flex flex-col items-center border-b-2 pb-5 bg-gray-50`}
        >
          <div className={`mt-7 sm:mt-14 px-10 pt-8 h-screen`}>
            <div className="flex flex-col w-full items-center justify-between h-[83dvh]">
              <ul className="flex gap-y-5 flex-col mt-10">
                {NavData.map((data, ind) => (
                  <li
                    key={ind}
                    onClick={toggleMenu}
                    className={`drop-shadow-xl font-main p-1 cursor-pointer text-center tracking-widest list-none duration-150 hover:text-green-300 ${isCurrentPath(
                      data.link
                    )}`}
                  >
                    <Link href={data.link}>{data.name}</Link>
                  </li>
                ))}
              </ul>
              <h1 className=" font-details text-xs italic">
                Global Trade, Swiftly Made.
              </h1>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
