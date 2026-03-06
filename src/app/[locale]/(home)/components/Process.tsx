import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { processSteps } from "@/shared/data/process.data";
import { useTranslations } from "next-intl";

function Process() {
  const t = useTranslations("Process");
  return (
    <>
      <section className="relative w-full  md:h-screen mt-12">
        <div className="absolute hidden md:block h-screen bg-[url(/process-line.svg)] bg-no-repeat bg-contain w-full bg-center"></div>
        <div className="container">
          <Badge title={t("badge")} />
          <H2 title={t("title")} />
          <div className="flex flex-col">
            {/* desktop */}
            <div className="hidden lg:block">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="absolute flex flex-col items-center text-center max-w-55"
                  style={{
                    left: step.position.desktop.x,
                    top: step.position.desktop.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className=" bg-(--process-step-bg) rounded-full flex items-center justify-center shadow-lg">
                    <p className="text-(--text) py-4 px-6 lg:py-6 lg:px-9 text-xl lg:text-3xl">{step.id}</p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm lg:text-lg font-semibold text-(--text)">
                      {step.title}asdad
                    </h4>
                    <p className="text-[10px] lg:text-sm text-(--secondarytext)">{step.desc}</p>
                  </div>


                </div>
              ))}
            </div>
            {/* tablet */}
            <div className="hidden md:block lg:hidden">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="absolute flex flex-col items-center text-center max-w-55"
                  style={{
                    left: step.position.tablet?.x,
                    top: step.position.tablet?.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className=" bg-(--process-step-bg) rounded-full flex items-center justify-center shadow-lg">
                    <p className="text-(--text) py-2 px-4 lg:py-6 lg:px-9 text-lg lg:text-3xl">{step.id}</p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm lg:text-lg font-semibold text-(--text)">
                      {step.title}
                    </h4>
                    <p className="text-[10px] lg:text-sm text-(--secondarytext)">{step.desc}</p>
                  </div>


                </div>
              ))}
            </div>
            {/* mobile */}
            <div className="block md:hidden">
              <div className="relative flex flex-col gap-3 pl-12">

                <div className="absolute left-[22px] top-6 bottom-6 w-px bg-(--card-border)" />

                {processSteps.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-4">

                    <div className="absolute -left-12 z-10 w-11 h-11 rounded-2xl bg-(--card) border border-(--card-border) flex items-center justify-center shrink-0 shadow-md">
                      <span className="font-clash font-bold text-sm text-(--secondarytext)">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex-1 mb-2 rounded-2xl bg-(--card) border border-(--card-border) px-4 pt-3.5 pb-4">
                      <h4 className="font-clash font-semibold text-[15px] text-(--text) mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-[12px] text-(--secondarytext) leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Process;
