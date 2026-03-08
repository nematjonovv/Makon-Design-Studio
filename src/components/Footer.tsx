import Socials from "@/app/[locale]/(home)/components/Socials";
import Adress from "./Adress";
import Menu from "./Menu";

function Footer() {
  return (
    <footer className="container mt-20 bg-(--header-bg) border border-(--header-border) bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-opacity-65 z-50 rounded-t-[30px] ">
      <div className="flex justify-between items-center px-22">
        <div className="space-y-5">
          <img src="/main_logo.png" className="h-40 -ml-8" alt="" />
          <Socials />
          <Adress />
        </div>
        <Menu className="flex flex-col gap-2" />
      </div>
    </footer>
  );
}

export default Footer;
