import { getGallery } from "@/api/get.api";
import AnimatedSection from "@/components/AnimationSection";
import { IGalleryImage } from "@/shared/types/gallery.type";
import { getTranslations } from "next-intl/server";
import StudioGallery from "./StudioGallery";

async function Studio() {
  const t = await getTranslations("Studio");
  const res = await getGallery().catch(() => null);
  const images: IGalleryImage[] = res?.data ?? [];

  return (
    <section className="container mt-35">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <AnimatedSection animation="fade-right" className="w-full max-w-140 mx-auto md:mx-0">
          <StudioGallery images={images} />
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay="delay-150">
          <h2 className="font-clash font-semibold text-(--text) text-3xl md:text-5xl leading-[1.1] tracking-tight max-w-xl">
            {t("title")}
          </h2>
          <div className="mt-6 flex flex-col gap-4 max-w-xl font-clashGrotesk text-base md:text-lg leading-relaxed text-(--secondarytext)">
            <p>{t("history")}</p>
            <p>{t("approach")}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Studio;
