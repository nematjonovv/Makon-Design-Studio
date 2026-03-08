"use client";
import { useTheme } from "@/Providers/ThemeProvider";
import Image from "next/image";

interface ICoverImage {
  image_light: string;
  image_dark: string;
  image_alt: {
    ru: string;
    uz: string;
  };
}
function ProjectCover({
  coverImage,
  className,
  alt,
  priority = false
}: {
  coverImage: ICoverImage;
  className: string;
  alt: string;
  priority: boolean;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cover = isDark ? coverImage.image_dark : coverImage.image_light;

  return <Image draggable={false} src={cover} alt={alt} className={className} fill priority={priority} />;
}

export default ProjectCover;
