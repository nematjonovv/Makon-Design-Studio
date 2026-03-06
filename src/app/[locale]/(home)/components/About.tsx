import Badge from "@/components/Badge";
import ReadMoreBtn from "@/components/ReadMoreBtn";
import { useTranslations } from "next-intl";
import Grid from "./Grid";
import H2 from "@/components/H2";
import AnimatedSection from "@/components/AnimationSection";

function About() {
  const t = useTranslations("About");
  return (
    <section className="">
      <div className="container text-center">
        <Badge title={t("badge")} />

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
        <ReadMoreBtn href="/about " which="solid" />
      </div>
    </section>
  );
}

export default About;
