import GlobalBackground from "@/components/GlobalBackground";
import { ThemeProviderCustom } from "@/Providers/ThemeProvider";
import { poppins, clash, clashGrotesk } from "@/styles/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
