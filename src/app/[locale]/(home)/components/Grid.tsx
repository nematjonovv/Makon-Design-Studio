import CountUp from "@/components/CounUp";
import { useTranslations } from "next-intl";

function Grid() {
  const t = useTranslations("About");
  return (
    <div className="bg-(--surface) rounded-[30px] p-6 mb-14 border border-(--card-border)">

      {/* ═══════════════════════════════════════════
          DESKTOP (xl+): Asl 12-ustunli grid layout
      ═══════════════════════════════════════════ */}
      <div className="hidden xl:grid grid-cols-12 grid-rows-6 gap-4 h-141.25">

        {/* +200 Muvaffaqiyatli loyiha */}
        <div className="grid-style col-span-3 row-span-3 rounded-[20px] bg-(--card)">
          <p>
            <CountUp
              from={0}
              to={200}
              separator=","
              direction="up"
              duration={1}
              className="text-[48px] text-white font-clash font-semibold flex flex-col items-start"
              startWhen={true}
              prefix="+"
            />
            <span>{t("success")}</span>
          </p>
        </div>

        {/* +100 Mijoz */}
        <div className="grid-style col-span-3 row-span-3 col-start-1 row-start-4 rounded-[20px] bg-(--card)">
          <p>
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="text-[48px] text-white font-clash font-semibold flex flex-col items-start"
              startWhen={true}
              prefix="+"
            />
            <span>{t("client")}</span>
          </p>
        </div>

        {/* Kichik rasm */}
        <div className="col-span-2 row-span-2 col-start-4 row-start-1 overflow-hidden bg-(--card) rounded-[20px]">
          <div className="w-full h-full bg-(image:--grid-sm) bg-no-repeat bg-cover bg-center hover:scale-110 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* O'rta rasm */}
        <div className="col-span-4 row-span-4 col-start-4 row-start-3 bg-(--card) rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-md) bg-no-repeat bg-cover bg-center hover:scale-110 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* Katta rasm */}
        <div className="col-span-7 row-span-2 col-start-6 row-start-1 rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-lg) bg-no-repeat bg-cover bg-center hover:scale-110 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* 5 yil tajriba */}
        <div className="pt-2 pl-7 col-span-5 row-span-2 col-start-8 row-start-3 rounded-[20px] bg-(--card)">
          <p className="text-[40px] font-clash font-semibold text-(--text) flex flex-col items-start flex-nowrap">
            <CountUp
              from={0}
              to={5}
              separator=","
              direction="up"
              duration={1}
              className="text-[48px] text-white font-clash font-semibold flex flex-col items-start"
              startWhen={true}
            />
            <span className="text-[16px] text-(--secondarytext)">
              {t("experience")}
            </span>
          </p>
        </div>

        {/* Individual yondashuv */}
        <div className="pt-3 pl-7 col-span-5 row-span-2 col-start-8 row-start-5 rounded-[20px] bg-(--card)">
          <p className="text-[32px] font-clash font-semibold text-(--text) flex flex-col items-start flex-nowrap">
            {t("individual")}
            <span className="text-[16px] text-(--secondarytext)">
              {t("individual-sub")}
            </span>
          </p>
        </div>

      </div>

      {/* ═══════════════════════════════════════════
          TABLET (md → xl): 2-ustunli bento grid
      ═══════════════════════════════════════════ */}
      <div className="hidden md:grid xl:hidden grid-cols-2 gap-4">

        {/* Katta rasm — to'liq kenglik */}
        <div className="col-span-2 h-56 rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-lg) bg-no-repeat bg-cover bg-center hover:scale-105 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* +200 Muvaffaqiyatli loyiha */}
        <div className="grid-style rounded-[20px] bg-(--card) h-44">
          <p>
            <CountUp
              from={0}
              to={200}
              separator=","
              direction="up"
              duration={1}
              className="text-[40px] text-white font-clash font-semibold flex flex-col items-start"
              startWhen={true}
              prefix="+"
            />
            <span>{t("success")}</span>
          </p>
        </div>

        {/* +100 Mijoz */}
        <div className="grid-style rounded-[20px] bg-(--card) h-44">
          <p>
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="text-[40px] text-white font-clash font-semibold flex flex-col items-start"
              startWhen={true}
              prefix="+"
            />
            <span>{t("client")}</span>
          </p>
        </div>

        {/* Kichik rasm */}
        <div className="h-52 overflow-hidden bg-(--card) rounded-[20px]">
          <div className="w-full h-full bg-(image:--grid-sm) bg-no-repeat bg-cover bg-center hover:scale-105 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* O'rta rasm */}
        <div className="h-52 bg-(--card) rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-md) bg-no-repeat bg-cover bg-center hover:scale-105 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* 5 yil tajriba */}
        <div className="pt-5 pl-7 rounded-[20px] bg-(--card) h-36">
          <p className="font-clash font-semibold text-(--text) flex flex-col items-start">
            <CountUp
              from={0}
              to={5}
              separator=","
              direction="up"
              duration={1}
              className="text-[40px] text-white font-clash font-semibold"
              startWhen={true}
            />
            <span className="text-[15px] text-(--secondarytext)">
              {t("experience")}
            </span>
          </p>
        </div>

        {/* Individual yondashuv */}
        <div className="pt-5 pl-7 rounded-[20px] bg-(--card) h-36">
          <p className="text-[26px] font-clash font-semibold text-(--text) flex flex-col items-start">
            {t("individual")}
            <span className="text-[14px] text-(--secondarytext)">
              {t("individual-sub")}
            </span>
          </p>
        </div>

      </div>

      {/* ═══════════════════════════════════════════
          MOBILE (<md): Bitta ustun
      ═══════════════════════════════════════════ */}
      <div className="flex md:hidden flex-col gap-4">

        {/* Katta rasm */}
        <div className="h-48 rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-lg) bg-no-repeat bg-cover bg-center hover:scale-105 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* Stats qatori: +200 va +100 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid-style rounded-[20px] bg-(--card) h-36">
            <p>
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className="text-[32px] text-white font-clash font-semibold flex flex-col items-start"
                startWhen={true}
                prefix="+"
              />
              <span className="text-sm">{t("success")}</span>
            </p>
          </div>

          <div className="grid-style rounded-[20px] bg-(--card) h-36">
            <p>
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="text-[32px] text-white font-clash font-semibold flex flex-col items-start"
                startWhen={true}
                prefix="+"
              />
              <span className="text-sm">{t("client")}</span>
            </p>
          </div>
        </div>

        {/* O'rta rasm */}
        <div className="h-52 bg-(--card) rounded-[20px] overflow-hidden">
          <div className="w-full h-full bg-(image:--grid-md) bg-no-repeat bg-cover bg-center hover:scale-105 transition rounded-[20px] duration-550 ease-out" />
        </div>

        {/* Kichik rasm + 5 yil tajriba */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-36 overflow-hidden bg-(--card) rounded-[20px]">
            <div className="w-full h-full bg-(image:--grid-sm) bg-no-repeat bg-cover bg-center hover:scale-105 transition rounded-[20px] duration-550 ease-out" />
          </div>

          <div className="pt-4 pl-5 rounded-[20px] bg-(--card) h-36">
            <p className="font-clash font-semibold text-(--text) flex flex-col items-start">
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={1}
                className="text-[36px] text-white font-clash font-semibold"
                startWhen={true}
              />
              <span className="text-[13px] text-(--secondarytext)">
                {t("experience")}
              </span>
            </p>
          </div>
        </div>

        {/* Individual yondashuv */}
        <div className="pt-5 pl-6 rounded-[20px] bg-(--card) h-28">
          <p className="text-[22px] font-clash font-semibold text-(--text) flex flex-col items-start">
            {t("individual")}
            <span className="text-[13px] text-(--secondarytext)">
              {t("individual-sub")}
            </span>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Grid;
