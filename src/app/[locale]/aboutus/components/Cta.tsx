import CtaButton from "@/components/CtaButton";
import { useTranslations } from "next-intl";

function Cta() {
  const t = useTranslations("CtaComponent");


  return (
    <div className="container relative h-screen flex flex-col justify-center items-center text-center overflow-hidden" >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-(--surface) blur-[120px] pointer-events-none"></div>
      <div className="space-y-5 z-50">
        <h2 className="text-4xl font-bold text-(--text) mt-4">{t("title")}</h2>
        <p className="text-(--secondarytext) mt-2 text-lg">{t("description")}</p>
        <CtaButton
          fontSize={14}
          padding={[13, 30]}
          round={14}
        />
      </div>
    </div>
  );
}

export default Cta;