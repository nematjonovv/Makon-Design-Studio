import BlurText from "@/components/BlurText";
import CtaButton from "@/components/CtaButton";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  const ctatitle = useTranslations("Header");

  return (
    <section className="bg-(image:--hero-bg) w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center bg-fixed">
      <div className="mx-auto text-center max-w-350">
          {
            <BlurText
              text={t("title")}
              delay={100}
              animateBy="words"
              direction="top"
              className="text-(--text) text-center font-clashGrotesk font-medium text-9xl mb-5 -z-10 justify-center"
            />
          }
        <p className="text-(--secondarytext) font-clash text-2xl max-w-150 mx-auto mb-7">
          {t("subtitle")}
        </p>
        <CtaButton
          fontSize={16}
          padding={[17, 41]}
          round={16}
        />
      </div>
    </section>
  );
}

export default Hero;
