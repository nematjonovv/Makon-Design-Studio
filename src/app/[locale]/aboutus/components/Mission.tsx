import AnimatedSection from "@/components/AnimationSection";
import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { useTranslations } from "next-intl";

function Mission() {
  const t = useTranslations("Mission");
  return (
    <div className="">
      <div className="text-center mb-10">
        <Badge title={t("badge")} />
        <H2 title={t("title")} />
      </div>
      <div className="flex gap-5 flex-wrap container">
        <AnimatedSection className="w-full md:w-[calc(50%-20px)]" animation="fade-up" delay="delay-0">
          <div className="w-full bg-(--surface) rounded-2xl p-10 border border-(--border-strong)">
            <p className="text-(--secondarytext)/90 text-lg pb-5">{t("missiya.subtitle")}</p>
            <p className="font-clash text-(--text) text-3xl pb-2">{t("missiya.title")}</p>
            <p className="font-clashGrotesk text-(--secondarytext) text-md h-15">{t("missiya.description")}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection className="w-full md:w-[calc(50%-20px)]" animation="fade-up" delay="delay-150">
          <div className="w-full bg-(--surface) rounded-2xl p-10 border border-(--border-strong)">
            <p className="text-(--secondarytext)/90 text-lg pb-5">{t("vizyonimiz.subtitle")}</p>
            <p className="font-clash text-(--text) text-3xl pb-2">{t("vizyonimiz.title")}</p>
            <p className="font-clashGrotesk text-(--secondarytext) text-md h-15">{t("vizyonimiz.description")}</p>
          </div>
        </AnimatedSection>

      </div>
    </div>

  );

}
export default Mission;