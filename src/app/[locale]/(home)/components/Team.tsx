import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { team } from "@/shared/data/team.data";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Team() {
  const t = useTranslations("Team");
  return (
    <section className="mt-35 container">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />

      {/* carousel */}
      <div className="relative w-full flex overflow-x-auto scrollnone mt-29">
        <span
          className="pointer-events-none absolute left-0 top-0 h-full w-10 z-50
             bg-[linear-gradient(90deg,var(--surface),transparent)]"
        ></span>

        {/* Right fade */}
        <span
          className="pointer-events-none absolute right-0 top-0 h-full w-10 z-50
             bg-[linear-gradient(270deg,var(--surface),transparent)]"
        ></span>

        {/* group */}
        <div className="flex w-auto justify-center items-center gap-5 scrollanimation pr-5">
          {/* card */}
          {team.map((e, i) => {
            return (
              <div
                key={e.id}
                className="w-75 flex-1 h-92.5 bg-(--surface) rounded-2xl relative"
              >
                <Image
                  src={e.image}
                  alt="asd"
                  width={300}
                  height={375}
                  className="absolute bottom-0 rounded-2xl"
                />
                <div className="absolute w-full h-full text-center flex flex-col justify-end items-center z-50 bg-black/25 py-7 rounded-2xl">
                  <p className="text-(--text) text-2xl">{e.name}</p>
                  <p className="text-gray-200 text-sm">{e.role.uz}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* group */}
        <div className="flex w-auto justify-center items-center gap-5 scrollanimation pr-5">
          {/* card */}
          {team.map((e, i) => {
            return (
              <div
                key={e.id}
                className="w-75 flex-1 h-92.5 bg-(--surface) rounded-2xl relative"
              >
                <Image
                  src={e.image}
                  alt="asd"
                  width={300}
                  height={375}
                  className="absolute bottom-0 rounded-2xl"
                />
                <div className="absolute w-full h-full text-center flex flex-col justify-end items-center z-50 bg-black/25 py-7 rounded-2xl">
                  <p className="text-(--text) text-2xl">{e.name}</p>
                  <p className="text-gray-200 text-sm">{e.role.uz}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
