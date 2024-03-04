import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Links } from "../constants/links";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] =
    useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <label className="swap swap-rotate md:hidden">
        <input
          type="checkbox"
          onClick={mobileMenuHandler}
          checked={openMobileMenu ? false : true}
          hidden
        />
        { openMobileMenu ? 
          <CloseOutlined className="dark:text-white swap-off fill-current w-6 h-6" />
          : 
          <MenuOutlined className="dark:text-white swap-on fill-current w-6 h-6" />
        }
        
      </label>

      {openMobileMenu ? (
        <div className="mobile-menu">
          {Links.map((link, index) => (
            <Link href={link.route} key={index}>{link.label}</Link>
          ))}
          <div className="flex-1 justify-end flex gap-3 items-center">
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
