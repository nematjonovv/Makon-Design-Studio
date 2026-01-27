import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const clash = localFont({
  src: [
    {
      path: "../assets/fonts/clash/ClashDisplay-Variable.woff2",
      weight: "500 600 700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});
export const clashGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/clashGrotesk/ClashGrotesk-Variable.woff2",
      weight: "500 600 700",
      style: "semibold",
    },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable:"--font-poppins"
});
