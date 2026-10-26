import { mediaUrl } from "@/shared/utils/mediaUrl";
import { getTeam } from "@/api/get.api";
import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import AnimatedSection from "@/components/AnimationSection";
import { ITeamMember } from "@/shared/types/team.type";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const delays = ["delay-0", "delay-150", "delay-300", "delay-500"] as const;

async function Team({ showBadge = true }: { showBadge?: boolean }) {
  const t = await getTranslations("Team");
  const res = await getTeam();
  const team: ITeamMember[] = res?.data ?? [];

  if (!team.length) return null;

  return (
    <section className="container mt-35">
      {showBadge && <Badge title={t("badge")} />}
      <H2 title={t("title")} />

      {/* Kam a'zo bo'lsa ham markazda turadi, ko'p bo'lsa qatorlarga o'tadi */}
      <div className="flex flex-wrap justify-center gap-4 mt-23">
        {team.map((member, i) => (
          <AnimatedSection
            key={member.id}
            animation="fade-up"
            delay={delays[i % delays.length]}
            className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] max-w-80"
          >
            <article className="group relative aspect-3/4 rounded-[30px] overflow-hidden border border-(--card-border) bg-(--surface)">
              <Image
                src={mediaUrl(member.photo)}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute inset-x-2 bottom-2 md:inset-x-3 md:bottom-3 rounded-[20px] bg-(--badge-bg) backdrop-blur-md border border-white/5 px-3 py-3 md:px-5 md:py-4">
                <p className="font-clash font-semibold text-white text-base md:text-2xl leading-tight truncate">
                  {member.name}
                </p>
                <p className="mt-1 font-clashGrotesk text-xs md:text-sm text-(--secondarytext) truncate">
                  {member.role}
                </p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Team;
