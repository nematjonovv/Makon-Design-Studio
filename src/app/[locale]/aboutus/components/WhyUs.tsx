import AnimatedSection from '@/components/AnimationSection';
import Badge from '@/components/Badge';
import H2 from '@/components/H2';
import { useTranslations } from 'next-intl';

function WhyUs() {
  const t = useTranslations("WhyUs");

  const items = t.raw("items") as Array<{
    number: string;
    title: string;
    description: string;
  }>;


  return (
    <div>
      <div className="text-center mb-10">
        <Badge title={t("badge")} />
        <H2 title={t("title")} />
      </div>
      <div className='grid grid-cols-2 gap-3 mt-12 container'>
        {
          items.map((item, index) => (
            <AnimatedSection animation="fade-up" key={index} delay={index * 200}>
              <div className="bg-(--surface) border border-[--border-muted] rounded-2xl p-[30px_28px] flex gap-4.5 items-start transition-[border-color,background] duration-250 hover:border-[rgba(42,97,111,0.7)] hover:bg-[rgba(42,97,111,0.12)]" key={index}>
                <div className="text-[11px] text-(--secondarytext) opacity-55 min-w-6 pt-0.75 font-medium">{item.number}</div>
                <div>
                  <h4 className='text-[15px] font-semibold mb-1.75 text-(--text)'>{item.title}</h4>
                  <p className='text-[13px] text-(--secondarytext) leading-[1.65] h-10'>{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))
        }
      </div>
    </div>
  );
}

//  .whyus-grid {
//       display: grid; grid-template-columns: 1fr 1fr;
//       gap: 12px; margin-top: 48px;
//     }


//  .whyus-card {
//       background: var(--surface);
//       border: 1px solid var(--border-muted);
//       border-radius: 16px; padding: 30px 28px;
//       display: flex; gap: 18px; align-items: flex-start;
//       transition: border-color 0.25s, background 0.25s;
//     }
//     .whyus-card:hover {
//       border-color: rgba(42,97,111,0.7);
//       background: rgba(42,97,111,0.12);
//     }
//     .whyus-num {
//       font-size: 11px; color: var(--secondarytext);
//       opacity: 0.55; min-width: 24px; padding-top: 3px; font-weight: 500;
//     }
//     .whyus-card h4 { font-size: 15px; font-weight: 600; margin-bottom: 7px; }
//     .whyus-card p { font-size: 13px; color: var(--secondarytext); line-height: 1.65; }

export default WhyUs;