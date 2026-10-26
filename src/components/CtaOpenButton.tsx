"use client";

import { useContactModal } from "@/components/ContactModal";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

function CtaOpenButton() {
  const t = useTranslations("Header");
  const { open } = useContactModal();

  return (
    <button
      type="button"
      onClick={open}
      className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-clashGrotesk text-[15px] font-semibold text-(--button-bg) cursor-pointer transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {t("cta")}
      <span className="grid size-10 place-items-center rounded-full bg-(--button-bg) text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <ArrowUpRight className="size-4.5" />
      </span>
    </button>
  );
}

export default CtaOpenButton;
