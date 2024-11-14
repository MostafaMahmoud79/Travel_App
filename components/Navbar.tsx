"use client"; 

import { useState } from "react"; 
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
    toggleMenu();
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              scroll={true}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div
        className="lg:hidden inline-block cursor-pointer"
        onClick={handleIconClick}
      >
        <Image 
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className={`transition-all duration-500 ${isIconClicked ? 'animate-bounce' : ''}`} // إضافة حركة bounce عند الضغط
        />
      </div>

      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 bg-green-600 w-full p-5 lg:hidden flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                scroll={true}
                className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
