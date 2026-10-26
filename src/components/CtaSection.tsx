import AnimatedSection from "@/components/AnimationSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CtaOpenButton from "./CtaOpenButton";

function CtaSection() {
  const t = useTranslations("CtaComponent");

  return (
    <section className="container mt-35">
      <AnimatedSection animation="fade-up">
        <div className="relative overflow-hidden rounded-[30px] bg-(--button-bg) px-6 py-12 md:px-14 md:py-16 text-white">
          {/* Fonda logo — line art, past opacity */}
          <Image
            src="/images/logo-line.png"
            alt=""
            aria-hidden
            width={1162}
            height={238}
            className="pointer-events-none select-none absolute -right-[12%] -bottom-[6%] w-[140%] md:w-[85%] max-w-none opacity-25"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:items-end">
            <div className="md:col-span-8">
              <h2 className="font-clash font-semibold text-3xl md:text-[52px] leading-[1.08] tracking-tight max-w-2xl">
                {t("title")}
              </h2>
              <p className="mt-5 font-clashGrotesk text-base md:text-lg text-white/80 max-w-lg">
                {t("description")}
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <CtaOpenButton />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default CtaSection;
