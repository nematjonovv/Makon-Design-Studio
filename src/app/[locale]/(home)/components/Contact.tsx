import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import ContactForm from "@/components/ContactForm";
import ContactCard from "./ContactCard";
import { useLocale, useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("Contact");
  const t2 = useTranslations("contactDecor");
  const locale = useLocale() as "uz" | "ru"
  console.log(locale);

  // contactCard
  return (
    <section className="container mb-5">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <ContactCard />

        <div className="flex flex-col gap-6">
          <ContactForm />

          <div className="flex-1 rounded-3xl border border-white/8 bg-(--surface) p-6 flex flex-col justify-between overflow-hidden relative min-h-[200px]">

            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-orange-500/5 blur-2xl pointer-events-none" />
            <div className="absolute -left-4 -top-4 w-32 h-32 rounded-full bg-orange-500/5 blur-xl pointer-events-none" />

            <p className="text-xs text-(--button-bg)/70 uppercase tracking-widest font-medium">
              Makon Studio
            </p>

            <div className="my-0">
              {
                locale === "uz" ? (<p className="text-white text-lg sm:text-xl font-medium leading-snug -mt-4">
                  Orzuingizdagi <span className="text-(--button-bg)">makonga</span> — bir qadam
                </p>) : (
                  <p className="text-white text-lg sm:text-xl font-medium leading-snug -mt-4">
                    Один шаг до — <span className="text-orange-400">интерьера мечты</span>
                  </p>
                )
              }
            </div>

            <div className="border-t border-white/8 pt-4">
              {
                locale === "uz" ? (
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Biz faqat dizayn qilmaymiz — muhit yaratamiz.
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Мы не просто создаём дизайн — мы создаём атмосферу.
                  </p>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
