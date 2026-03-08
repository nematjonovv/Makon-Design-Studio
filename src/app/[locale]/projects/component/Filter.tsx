"use client";

import { getCategories, getProjects } from "@/api/get.api";
import GlobalBackground from "@/components/GlobalBackground";
import { IProject } from "@/shared/types/project.type";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import PorjectsMasonry from "./PorjectsMasonry";

function Filter() {
  const [ctgrs, setCtgrs] = useState<{ id: number, title: string }[]>([]);
  const [project, setProject] = useState<IProject[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | string | null>("all");
  const t = useTranslations("Projects")
  const f = useTranslations("filter")
  useEffect(() => {
    getCategories().then((res) => {
      setCtgrs(res.data);
    }).catch((err) => {
      console.error("Error fetching categories:", err);
    });
  }, []);

  useEffect(() => {
    getProjects().then((res) => {
      setProject(res.data);
    }).catch((err) => {
      console.error("Error fetching projects:", err);
    });
  }, [])



  return (
    <div className="py-5">

      <h2 className="text-4xl font-clash font-medium py-5">
        {t("title")}
      </h2>
      <div className="flex flex-wrap gap-5 mb-10 *:py-4">
        <button onClick={() => setSelectedCategory("all")} className="px-7 bg-(--button-bg) hover:bg-(--button-hover) text-white rounded-full cursor-pointer">
          {f("all")}
        </button>

        {ctgrs?.map((ctgr) => (
          <button onClick={() => setSelectedCategory(ctgr.id)} key={ctgr.id} className="bg-(--button-bg) hover:bg-(--button-hover) text-white rounded-full cursor-pointer px-4">
            {ctgr.title}
          </button>
        ))}
      </div>

      <PorjectsMasonry data={project.filter((p) => selectedCategory === "all" || p.categoryId === selectedCategory)} />
    </div>
  );
}

export default Filter;