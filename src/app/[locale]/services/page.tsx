import { getServices } from "@/api/get.api";
import ServiceStackCard from "./components/ServiceStackCard";
import { IServices } from "@/shared/types/service.type";
import CtaSection from "@/components/CtaSection";
import StickyStack from "@/components/StickyStack";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata(locale, "services", "/services");
}

async function Services({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [res, t] = await Promise.all([getServices(), getTranslations("Services")]);
  const data: IServices[] = res?.data ?? [];

  return (
    <main className="w-screen text-(--text)">
      <section className="container pt-32 md:pt-40 pb-12 md:pb-16">
        <h1 className="font-clash font-semibold text-(--text) text-[40px] leading-[1.05] md:text-7xl tracking-tight max-w-3xl animate-fade-up">
          {t("title")}
        </h1>
      </section>

      {data.length ? (
        <StickyStack>
          {data.map((service, index) => (
            <ServiceStackCard key={service.id} data={service} index={index} />
          ))}
        </StickyStack>
      ) : (
        <section className="container pb-24">
          <p className="font-clashGrotesk text-center text-(--secondarytext) py-20 border border-dashed border-(--card-border) rounded-[30px]">
            {t("empty")}
          </p>
        </section>
      )}

      <CtaSection />
    </main>
  );
}

export default Services;
