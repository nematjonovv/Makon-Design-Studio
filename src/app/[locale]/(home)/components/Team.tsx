import { getTeam } from "@/api/get.api";
import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { ITeamMember } from "@/shared/types/team.type";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function Team() {
  const t = await getTranslations("Team");
  const res = await getTeam();

  const team: ITeamMember[] = await res?.data;
  return (
    <section className="mt-35 container">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />

      {/* carousel */}
      <div className="relative w-full flex scroll-container overflow-x-auto scrollnone mt-29">
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
        <div className="flex w-auto justify-center  items-center scrollanimation gap-5 pr-5">
          {/* card */}
          {team.map((e, i) => {
            return (
              <div
                key={i}
                className={`w-75 shrink-0 h-92.5 bg-(--surface)  rounded-2xl relative group overflow-hidden`}
              >
                <Image
                  src={e.photo}
                  alt={e.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
                <div className="absolute w-full h-full text-center flex flex-col justify-end items-center z-10 bg-black/25 py-7 rounded-2xl">
                  <p className="text-(--text) text-2xl">{e.name}</p>
                  <p className="text-gray-200 text-sm">{e.role}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* group */}
        <div className="flex w-auto justify-center items-center scrollanimation gap-5 pr-5">
          {/* card */}
          {team.map((e, i) => {
            return (
              <div
                key={i}
                className={`w-75 shrink-0 h-92.5 bg-(--surface) rounded-2xl  relative group overflow-hidden`}
              >
                <Image
                  src={e.photo}
                  alt={e.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
                <div className="absolute w-full h-full text-center flex flex-col justify-end items-center z-10 bg-black/25 py-7 rounded-2xl">
                  <p className="text-(--text) text-2xl">{e.name}</p>
                  <p className="text-gray-200 text-sm">{e.role}</p>
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
