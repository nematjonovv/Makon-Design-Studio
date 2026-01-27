import CountUp from "@/components/CounUp";
import { useTranslations } from "next-intl";

function Grid() {
  const t = useTranslations("About");
  return (
    <div className="bg-(--surface) rounded-[30px] p-6 mb-14 border border-(--card-border)">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-141.25">
        <div className="grid-style col-span-3 row-span-3 rounded-[20px] bg-(--card)">
          <p>
            {
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className="text-[48px] text-white font-clash font-semibold flex flex-col items-start"
                startWhen
                prefix="+"
              />
            }
            <span>{t("success")}</span>
          </p>
        </div>

        <div className="grid-style col-span-3 row-span-3 col-start-1 row-start-4 rounded-[20px] bg-(--card)">
          <p>
            {
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="text-[48px] text-white font-clash font-semibold flex flex-col items-start"
                startWhen
                prefix="+"
              />
            } <span>{t("client")}</span>
          </p>
        </div>

        <div className="col-span-2 row-span-2 col-start-4 row-start-1 overflow-hidden bg-(--card)  rounded-[20px]">
          <div className="w-full h-full bg-(image:--grid-sm) bg-no-repeat bg-cover bg-center hover:scale-110 transition rounded-[20px] duration-550 ease-out"></div>
        </div>

        <div className="col-span-4 row-span-4 col-start-4 row-start-3 bg-(--card) rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-md) bg-no-repeat bg-cover bg-center hover:scale-110 transition rounded-[20px] duration-550 ease-out"></div>
        </div>

        <div className="col-span-7 row-span-2 col-start-6 row-start-1 rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-lg) bg-no-repeat bg-cover bg-center hover:scale-110 transition rounded-[20px] duration-550 ease-out"></div>
        </div>

        <div className="pt-2 pl-7 col-span-5 row-span-2 col-start-8 row-start-3 rounded-[20px] bg-(--card)">
          <p className="text-[40px] font-clash font-semibold text-(--text) flex flex-col items-start flex-nowrap">
            {
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={1}
                className="text-[48px] text-white font-clash font-semibold flex flex-col items-start"
                startCounting
              />
            }
            <span className="text-[16px] text-(--secondarytext)">
              {t("experience")}
            </span>
          </p>
        </div>

        <div className="pt-3 pl-7 col-span-5 row-span-2 col-start-8 row-start-5 rounded-[20px] bg-(--card)">
          <p className="text-[32px] font-clash font-semibold text-(--text) flex flex-col items-start flex-nowrap">
            {t("individual")}
            <span className="text-[16px] text-(--secondarytext)">
              {t("individual-sub")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
