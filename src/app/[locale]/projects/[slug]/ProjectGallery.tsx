"use client"
import { useEffect, useState } from "react";
import { mediaUrl } from "@/shared/utils/mediaUrl";
import { IProject } from "@/shared/types/project.type";

type Props = {
  gallery: IProject["gallery"];
  locale: "ru" | "uz";
};

function ProjectGallery({ gallery, locale }: Props) {
  const [viewImage, setViewImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !!viewImage);
  }, [viewImage]);

  return (
    <>
      {/* Gallery masonry-ish */}
      <div className="grid grid-cols-2 gap-3">
        {gallery?.map((img) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden aspect-square"
          >
            <img
              src={mediaUrl(img.image)}
              alt={img.image_alt[locale]}
              onClick={() => setViewImage(mediaUrl(img.image))}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <div
        className={`${viewImage ? "flex" : "hidden"} fixed w-full h-full inset-0 bg-black/90 z-50 justify-center items-center`}
        onClick={() => setViewImage(null)}
      >
        {viewImage && (
          <div
            className="fixed w-full h-full inset-0 bg-black/50 z-999 overflow-hidden flex justify-center items-center"
            onClick={() => setViewImage(null)}
          >
            <img src={viewImage} className="w-full h-full object-contain" alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectGallery;
