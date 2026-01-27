import Image from "next/image";
import ThemeButton from "./ThemeButton";
import CtaButton from "./CtaButton";
import Menu from "./Menu";
import { useTranslations } from "next-intl";
import DropDownLang from "./DropDownLang";
import Link from "next/link";

function Header() {
  const t = useTranslations("Header");
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
      <Link href={"/"}>
        <Image src={"/main_logo.png"} alt="logo" width={135} height={90} />
      </Link>
      <Menu className="flex justify-center gap-10 px-4" />
      <div className="flex items-center gap-5">
        <DropDownLang />
        <ThemeButton />
        <CtaButton padding={[8.5, 16.5]} fontSize={14} round={12} />
      </div>
    </header>
  );
}

export default Header;
