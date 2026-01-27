import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import { processSteps } from "@/shared/data/process.data";
import { useTranslations } from "next-intl";

function Process() {
  const t = useTranslations("Process");
  return (
    <section className="relative w-full h-screen mt-12">
      <div className="absolute h-screen bg-[url(/process-line.svg)] bg-no-repeat bg-contain w-full bg-center"></div>
      <div className="container">
        <Badge title={t("badge")} />
        <H2 title={t("title")} />
        <div>
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="absolute flex flex-col items-center text-center max-w-55"
              style={{
                left: step.position.x,
                top: step.position.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className=" bg-(--process-step-bg) rounded-full flex items-center justify-center shadow-lg">
                <p className="text-(--text) py-4 px-6 lg:py-6 lg:px-9 text-xl lg:text-3xl">{step.id}</p>
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
      </div>
    </section>
  );
}
 export default Process;
