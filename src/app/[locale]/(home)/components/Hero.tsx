import BlurText from "@/components/BlurText";
import CtaButton from "@/components/CtaButton";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  const ctatitle = useTranslations("Header");

  return (
    <section className="bg-(image:--hero-bg) w-full h-screen bg-no-repeat bg-cover bg-center flex items-center bg-fixed overflow-x-auto">
      <div className=" text-center container">
        {
          <BlurText
            text={t("title")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-(--text) text-center font-clashGrotesk font-medium text-6xl
             lg:text-8xl mb-5 -z-10 justify-center"
          />
        }
        <p className="text-(--secondarytext) font-clash text-xl max-w-150 mx-auto mb-7">
          {t("subtitle")}
        </p>
        <CtaButton
          fontSize={14}
          padding={[13, 30]}
          round={14}
        />
      </div>
    </section>
  );
}

export default Hero;
