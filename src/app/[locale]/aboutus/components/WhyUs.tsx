import AnimatedSection from '@/components/AnimationSection';
import { useTranslations } from 'next-intl';

const delays = ["delay-0", "delay-150", "delay-300"] as const;

function WhyUs() {
  const t = useTranslations("WhyUs");

  const items = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="container mt-35">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        {/* Chap: sarlavha — desktopda scroll paytida yopishib turadi */}
        <AnimatedSection animation="fade-up" className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <h2 className="font-clash font-semibold text-(--text) text-3xl md:text-[44px] leading-[1.1] tracking-tight max-w-xs">
              {t("title")}
            </h2>
          </div>
        </AnimatedSection>

        {/* O'ng: afzalliklar ro'yxati */}
        <ul className="md:col-span-8 border-t border-(--border-muted)">
          {items?.map((item, index) => (
            <li key={item.number} className="border-b border-(--border-muted)">
              <AnimatedSection
                animation="fade-up"
                delay={delays[index % delays.length]}
                className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-x-8 gap-y-2 py-6 md:py-8"
              >
                <h3 className="font-clash font-semibold text-(--text) text-lg md:text-xl leading-snug">
                  {item.title}
                </h3>
                <p className="font-clashGrotesk text-sm md:text-[15px] leading-relaxed text-(--secondarytext)">
                  {item.description}
                </p>
              </AnimatedSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyUs;
