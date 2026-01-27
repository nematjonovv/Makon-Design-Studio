import { contactCard } from "@/shared/data/contact.data";
import Link from "next/link";

function Socials() {
  return (
    <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
      {contactCard.socials.map((s) => (
        <Link
          key={s.key}
          href={s.url}
          className={`${s.icon} text-(--process-step-bg) bg-white p-0.5 px-1 rounded-full`}
        />
      ))}
    </div>
  );
}

export default Socials;
