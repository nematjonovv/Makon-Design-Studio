import { getServices } from "@/api/get.api";
import AnimatedSection from "@/components/AnimationSection";
import Badge from "@/components/Badge";
import CtaButton from "@/components/CtaButton";
import H2 from "@/components/H2";
import ReadMoreBtn from "@/components/ReadMoreBtn";
import { IServices } from "@/shared/types/service.type";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

async function Services() {
  const t = await getTranslations("Services");
  const locale = (await getLocale()) as "ru" | "uz";
  const res = await getServices();
  const services: IServices[] = await res?.data;
  return (
    <section className="container mt-12">
      <Badge title={t("badge")} />
      <AnimatedSection animation="fade-up">
        <H2 title={t("title")} />
      </AnimatedSection>

      <div className="relative overflow-hidden rounded-4xl flex w-full justify-between gap-5 flex-wrap mt-15">
        {services?.map((service, index) => {
          return (
            <AnimatedSection
              animation={"fade-up"}
              delay={index % 2 === 0 ? "delay-300" : "delay-0"}
              index={index}
              key={service.id}
              className={`${index === 2 ? "w-full" : "w-full lg:flex-1 lg:min-w-[calc(50%-10px)]"}`}
            >
              <div
                key={service.id}
                className={`relative border border-(--card-border) backdrop-blur-md bg-(--surface) rounded-4xl pt-6.5 px-9 pb-10 flex items-center overflow-hidden ${index === 2 ? "w-full" : "w-full lg:flex-1 lg:min-w-[calc(50%-10px)]"}`}
              >
                {" "}
                <div className="h-full w-auto flex flex-col justify-between z-10">
                  <div className="">
                    <h4 className="text-4xl text-(--text) font-clashGrotesk font-medium whitespace-nowrap">
                      {service.localeData[locale].title}
                    </h4>
                    <p className="text-sm md:max-w-1/2 min-h-20 text-(--secondarytext) mt-2 mb-15">
                      {service.localeData[locale].desc}
                    </p>
                  </div>

                  <div className="space-x-5">
                    <CtaButton fontSize={14} round={12} padding={[8, 16.5]} />
                    <ReadMoreBtn href="/services" which="ghost" />
                  </div>
                </div>
                <Image
                  draggable="false"
                  src={service.icon}
                  alt="service image"
                  height={400}
                  width={400}
                  className="absolute object-contain -right-11 -bottom-20 hidden md:block"
                />
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
