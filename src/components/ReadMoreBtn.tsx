import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type ButtonProps = {
  href: string;
  which: "ghost" | "solid";
};

function ReadMoreBtn({ href, which }: ButtonProps) {
  const t = useTranslations("components");
  if (which === "solid") {
    return (
      <Link
        href={href}
        className={`bg-(--button-bg) text-(--text) rounded-xl text-[14px] hover:bg-(--button-hover) py-2.5 px-8`}
      >
        {t("readmore")}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`bg-transparent text-(--text) rounded-xl text-[14px] border border-transparent hover:border-(--border-strong) py-2.5 px-8 transition duration-300`}
    >
      {t("readmore")} {">"}
    </Link>
  );
}

export default ReadMoreBtn;

{
  /*  */
}
