import CtaSection from "@/components/CtaSection";
import Team from "../(home)/components/Team";
import Stats from "./components/Stats";
import Studio from "./components/Studio";
import WhyUs from "./components/WhyUs";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { staticPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return staticPageMetadata(locale, "aboutus", "/aboutus");
}

async function AboutUS({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-screen overflow-x-clip text-(--text) mt-50">
      <Stats />
      <Studio />
      <WhyUs />
      <Team showBadge={false} />
      <CtaSection />
    </main>
  );
}

export default AboutUS;