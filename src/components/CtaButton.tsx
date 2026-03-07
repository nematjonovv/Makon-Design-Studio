import { useTranslations } from "next-intl";
import Link from "next/link";

type CtaButtonProps = {
  padding: [number, number];
  fontSize: number;
  round: number;
};

function CtaButton({ padding, fontSize, round }: CtaButtonProps) {
  const [py, px] = padding;
  const t = useTranslations("Header");
  return (
    <Link
    href={"/contact"}
      className={`bg-(--button-bg) border-(--border-strong) text-(--text) border cursor-pointer sm:text-[10px] sm:flex-nowrap`}
      style={{
        padding: `${py}px ${px}px`,
        fontSize: `${fontSize}px`,
        borderRadius: `${round}px`,
      }}
    >
      {t("cta")}
    </Link>
  );
}

export default CtaButton;
