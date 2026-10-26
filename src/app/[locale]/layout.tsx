import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import { ContactModalProvider } from "@/components/ContactModal";
import { ThemeProviderCustom } from "@/Providers/ThemeProvider";
import { poppins, clash, clashGrotesk } from "@/styles/fonts";
import { SITE_NAME, SITE_URL, baseOpenGraph } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.home" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s | ${SITE_NAME}`,
    },
    description: t("description"),
    applicationName: SITE_NAME,
    icons: { icon: "/favicon.ico" },
    openGraph: baseOpenGraph(locale),
    twitter: { card: "summary_large_image" },
    verification: {
      google: "JaR7S9wpgeel0t9M6grGAYjLer6YuWq2gZC2NMPo6H4",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${poppins.className} ${clash.variable} ${clashGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body className="relative">
        {/* Global background */}
        <GlobalBackground />
        <Analytics />
        <SpeedInsights />
        {/* Site content */}
        <ThemeProviderCustom>
          <NextIntlClientProvider>
            <ContactModalProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ContactModalProvider>
          </NextIntlClientProvider>
        </ThemeProviderCustom>
      </body>
    </html>
  );
}
