import Badge from "@/components/Badge";
import CtaButton from "@/components/CtaButton";
import H2 from "@/components/H2";
import ReadMoreBtn from "@/components/ReadMoreBtn";
import { IServices } from "@/shared/types/service.type";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Services() {
  const t = useTranslations("Services");

  const servicesData: IServices[] = [
    {
      id: "1",
      title: "Loyiha dizayni",
      desc: "Interyer yechimi umumiy konsepsiya, uslub va funksional qarorlar asosida ishlab chiqiladi.",
      image: "/images/service-design.png",
    },
    {
      id: "2",
      title: "3D vizualizatsiya",
      desc: "Loyiha yakuniy ko‘rinishi boshlanishidan oldin vizual shaklda ko‘rsatiladi.",
      image: "/images/service-visual.png",
    },
    {
      id: "3",
      title: "Mukammal rejalashtirish",
      desc: "Xonalar joylashuvi va harakat yo‘nalishlari kundalik foydalanishga mos holda rejalashtiriladi.",
      image: "/images/service-plan.png",
    },
    {
      id: "4",
      title: "Amalga oshirish",
      desc: "Tasdiqlangan loyiha asosida ish jarayoni bosqichma-bosqich amalga oshiriladi.",
      image: "/images/service-build.png",
    },
    {
      id: "5",
      title: "Kalit topshirish ta’miri",
      desc: "Ta’mirlash ishlari boshidan oxirigacha to‘liq olib boriladi va tayyor holatda topshiriladi.",
      image: "/images/service-tunrkey.png",
    },
  ];
  return (
    <section className="container mt-12">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />

      <div className="relative overflow-hidden rounded-4xl flex w-full justify-between gap-5 flex-wrap mt-15">
        <div className="absolute inset-0 z-0">
          {/* <BackgroundGradientAnimation /> */}
        </div>
        {servicesData?.map((service, index) => {
          return (
            <div
              key={service.id}
              className={`relative border border-(--card-border) backdrop-blur-md bg-(--surface) rounded-4xl pt-6.5 px-9 pb-10 flex items-center overflow-hidden ${index === 2 ? "w-full" : "w-full lg:flex-1 lg:min-w-[calc(50%-10px)]"}`}
            >
              <div className="h-full flex flex-col justify-between z-10">
                <div className="">
                  <h4 className="text-4xl text-(--text) font-clashGrotesk font-medium whitespace-nowrap">
                    {service.title}
                  </h4>
                  <p className="text-sm md:max-w-1/2 text-(--secondarytext) mt-2 mb-15">
                    {service.desc}
                  </p>
                </div>

                <div className="space-x-5">
                  <CtaButton fontSize={14} round={12} padding={[8, 16.5]} />
                  <ReadMoreBtn href="/services" which="ghost" />
                </div>
              </div>

              <Image
                draggable="false"
                src={service.image}
                alt="service image"
                height={400}
                width={400}
                className="absolute object-contain -right-11 -bottom-20 hidden md:block"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
