"use client";

import { useTranslations } from "next-intl";
import { useContactModal } from "./ContactModal";

type CtaButtonProps = {
  padding: [number, number];
  fontSize: number;
  round: number;
  onClick?: () => void;
};

/** "Ariza qoldirish" — bosilganda ariza formasi modal oynada ochiladi */
function CtaButton({ padding, fontSize, round, onClick }: CtaButtonProps) {
  const [py, px] = padding;
  const t = useTranslations("Header");
  const { open } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={`bg-(--button-bg) border-(--border-strong) text-(--text) border cursor-pointer sm:text-[10px] sm:flex-nowrap`}
      style={{
        padding: `${py}px ${px}px`,
        fontSize: `${fontSize}px`,
        borderRadius: `${round}px`,
      }}
    >
      {t("cta")}
    </button>
  );
}

export default CtaButton;
