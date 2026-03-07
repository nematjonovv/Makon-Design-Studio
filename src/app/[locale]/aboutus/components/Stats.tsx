import AnimatedSection from "@/components/AnimationSection";
import H2 from "@/components/H2";
import Grid from "@/app/[locale]/(home)/components/Grid";
import { useTranslations } from "next-intl";

function Stats() {
  const t = useTranslations("About");
  return (
    <section className="container">
      <AnimatedSection animation="fade-up">
        <div className="text-center">
          <H2 title={t("title")} />
          <p className="text-(--secondarytext) font-clash font-medium  mb-7 max-w-1/2.5">
            {t("subtitle")}
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay="delay-300">
        <Grid />
      </AnimatedSection>
    </section>
  );
}

export default Stats;