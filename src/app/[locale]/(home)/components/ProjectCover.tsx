"use client";
import { useTheme } from "@/Providers/ThemeProvider";
import Image from "next/image";

type CoverImage = {
  light: { src: string; alt: { uz: string; ru: string } };
  dark: { src: string; alt: { uz: string; ru: string } };
};

function ProjectCover({
  coverImage,
  className,
}: {
  coverImage: CoverImage;
  className: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cover = isDark ? coverImage.dark : coverImage.light;

  return <Image draggable={false} src={cover.src} alt={cover.alt.uz} className={className} width={500} height={500} />;
}

export default ProjectCover;
