/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { Links } from "../constants/links";
import useMenuActive from "../hooks/useMenuActive";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <nav className="w-full py-5 dark:bg-dark">
      <div className="wrapper flex items-center justify-between">
        <MobileMenu />
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center max-md:ml-5">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white max-md:text-[16px]">
              EX-BLOG
            </h1>
          </div>
        </Link>

        <div className="flex gap-8 max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 dark:text-white justify-center">
          {Links.map((link, index) => {
            const isActive = useMenuActive(link.route);
            return (
              <LinkItem
                key={index}
                route={link.route}
                label={link.label}
                isActive={isActive}
              />
            );
          })}
        </div>
        
        <div className="flex-1 justify-end flex gap-3 items-center max-md:hidden">
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between ml-8 gap-8 max-md:gap-3">
          <Link href={"/signup"} className="text-gray-600 rounded-md dark:text-white max-md:text-[15px]">SIGN UP</Link>
          <Link href={"/login"} className="bg-sky-400 text-white rounded-md px-3 py-1 max-md:text-[15px]">LOGIN</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
