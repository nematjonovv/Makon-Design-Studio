import { useTranslations } from "next-intl";

type CtaButtonProps = {
  padding: [number, number];
  fontSize: number;
  round: number;
};

function CtaButton({ padding, fontSize, round }: CtaButtonProps) {
  const [py, px] = padding;
  const t = useTranslations("Header");
  return (
    <button
      className={`bg-(--button-bg) border-(--border-strong) text-(--text) border cursor-pointer`}
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
