import { contactCard } from "@/shared/data/contact.data";
import { useLocale } from "next-intl";

function Adress() {
  const locale = useLocale() as "uz" | "ru";
  const data = contactCard.address.localeData[locale];

  return (
    <div className="flex text-(--text) text-xs sm:text-sm gap-2 flex-wrap">
      <p>{data.city}</p>
      <p>{data.street}</p>
      <p>{data.full}</p>
    </div>
  );
}

export default Adress;
