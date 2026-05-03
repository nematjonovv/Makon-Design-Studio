import GlobalBackground from "@/components/GlobalBackground";
import { ThemeProviderCustom } from "@/Providers/ThemeProvider";
import { poppins, clash, clashGrotesk } from "@/styles/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "Makon | Interior Design Studio",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${clash.variable} ${clashGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <meta name="google-site-verification" content="JaR7S9wpgeel0t9M6grGAYjLer6YuWq2gZC2NMPo6H4" />
      </head>
      <body className="relative">
        {/* Global background */}
        <GlobalBackground />
        <Analytics />
        <SpeedInsights />
        {/* Site content */}
        <ThemeProviderCustom>{children}</ThemeProviderCustom>
      </body>
    </html>
  );
}
