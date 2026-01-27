import Badge from "@/components/Badge";
import H2 from "@/components/H2";
import ContactForm from "@/components/ContactForm";
import ContactCard from "./ContactCard";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("Contact");
  // contactCard
  return (
    <section className="container">
      <Badge title={t("badge")} />
      <H2 title={t("title")} />

      <div
        className="
  flex flex-col gap-6
  lg:flex-row lg:items-stretch lg:justify-between lg:gap-13
"
      >
        <div className="w-full lg:flex-1">
          <ContactCard />
        </div>

        <div className="w-full lg:max-w-[520px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
