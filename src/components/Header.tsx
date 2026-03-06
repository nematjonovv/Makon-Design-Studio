"use client";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import CtaButton from "./CtaButton";
import Menu from "./Menu";
import { useTranslations } from "next-intl";
import DropDownLang from "./DropDownLang";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

function Header() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="fixed top-10 left-1/2 -translate-x-1/2 container-header
  flex items-center justify-between
  h-16
  rounded-2xl
  border border-(--header-border)
  bg-(--header-bg)
  bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-opacity-65 z-50
  "
    >
      <Link href={"/"} className="">
        <Image src={"/main_logo.png"} alt="logo" width={135} height={90} />
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center">
          <Menu className="hidden lg:flex justify-center items-center gap-10 h-full px-4" />
          <div className="flex items-center gap-5">
            <DropDownLang />
            <ThemeButton />
            <CtaButton padding={[8.5, 16.5]} fontSize={14} round={12} />
          </div>
        </div>

        <div className="flex lg:hidden cursor-pointer text-white">
          {isOpen ? (<X className=" top-4 right-4 z-50" size={24} onClick={() => setIsOpen(false)} />) : (
            <MenuIcon size={24} className=" top-4 right-4 z-50" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>


      <div className={`absolute inset-0 -top-11 flex overflow-hidden bg-(--bg) h-screen w-1/2 flex-col justify-center items-center gap-5  ${isOpen ? "header-visible" : "header-hidden"}`}>
        <Menu className="flex flex-col justify-center gap-10 px-4" />
        <div className="flex md:hidden flex-col items-center gap-5">
          <div className="flex items-center">
            <DropDownLang />
            <ThemeButton />
          </div>
          <CtaButton padding={[8.5, 16.5]} fontSize={14} round={12} />
        </div>
      </div>
    </header>
  );
}

export default Header;
