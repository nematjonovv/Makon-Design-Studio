import { ContactData } from "@/api/get.api";
import { useLocale } from "next-intl";

function Adress({ contact }: { contact: ContactData | null }) {
  const locale = useLocale() as "uz" | "ru";

  return (
    <div className="flex text-(--text) text-xs sm:text-sm gap-2 flex-wrap">
      <p>{locale === "ru" ? contact?.addressRu : contact?.addressUz}</p>
    </div>
  );
}

export default Adress;
