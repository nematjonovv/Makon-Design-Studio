import { IServices } from "@/shared/types/service.type";
import { useLocale } from "next-intl";
import Link from "next/link";


function ServiceBox({ data, index }: { data?: IServices, index?: number }) {
  if (data === undefined) return null;
  const locale = useLocale()
  const service = data.localeData[locale as "ru" | "uz"];
  return (
    <div className="flex items-center justify-center p-6 w-full">
      <div className={`flex ${index && index % 2 ? 'flex-row-reverse' : 'flex-row'} border border-(--border-strong) w-full max-w-5xl min-h-140 rounded-3xl overflow-hidden shadow-xl font-clashGrotesk`}>

        {/* LEFT */}
        <div className={`w-full lg:w-1/2 bg-(--surface) text-stone-100 flex flex-col justify-between p-12`}>
          <div>
            {/* Title */}
            <p className="text-xs tracking-[3px] uppercase text-stone-500 mb-3">Xizmat</p>
            <h2 className="text-4xl font-semibold text-white leading-tight mb-4 font-clash">
              {service.title}
            </h2>
            <p className="text-lg text-stone-400 leading-relaxed mb-10" style={{ fontWeight: 300 }}>
              {service.desc}
            </p>

            {/* Features */}
            <p className="text-sm tracking-[2px] uppercase text-white font-semibold mb-4">Xizmat ichiga nimalar kiradi</p>
            <ul className="flex flex-col gap-2.5 mb-10">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Steps */}
            <p className="text-sm tracking-[2px] uppercase text-white font-semibold mb-4">Ish jarayoni</p>
            <ol className="flex flex-col gap-3">
              {service.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-stone-300">
                  <span className="w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-xs text-stone-500 shrink-0"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-10 border-t border-stone-800 mt-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-500 mb-0.5">Davomiyligi</p>
              <p className="text-lg font-semibold text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {service.duration}
              </p>
            </div>
            <Link href="/contact" className="bg-(--button-bg) cursor-pointer hover:bg-(--button-hover) transition-colors text-stone-100 text-sm font-medium rounded-xl px-6 py-3">
              Buyurtma berish →
            </Link>
          </div>

        </div>

        {/* RIGHT */}
        <div className="w-1/2 hidden lg:block relative bg-(--surface)/20 bg-clip-padding backdrop-filter backdrop-blur-[10px]  overflow-hidden">
          <img
            src={data.icon}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
        </div>

      </div>
    </div>
  );
}

export default ServiceBox;