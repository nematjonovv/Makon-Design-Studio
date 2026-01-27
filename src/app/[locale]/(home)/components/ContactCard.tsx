"use client";

import Adress from "@/components/Adress";
import { contactCard } from "@/shared/data/contact.data";
import { ILocaleAddress } from "@/shared/types/contact.type";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import Socials from "./Socials";

function ContactCard() {
  return (
    <div
      className="
      flex flex-col justify-between
      p-6 sm:p-8 lg:p-12
      bg-(--surface) rounded-4xl
      border border-(--card-border)
      space-y-6
      w-full
      
    "
    >
      <div className="space-y-4">
        <a
          href={`tel:${contactCard.phone.replace(/\s/g, "")}`}
          className="
          block
          text-lg sm:text-xl lg:text-2xl
          text-(--text) font-clash font-medium
          hover:text-(--secondarytext)
        "
        >
          {contactCard.phone}
        </a>
        <Socials />
        <Adress />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23977.01089891371!2d69.24495563125001!3d41.30611459416383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7844bc66a5%3A0xe72517b72d55eb6c!2sBEST%20GUESTHOUSE!5e0!3m2!1sru!2s!4v1769496959503!5m2!1sru!2s"
        loading="lazy"
        className="
        w-full
        rounded-[30px]
        border-0
        h-[240px] sm:h-[280px] lg:h-[320px]
      "
      />
    </div>
  );
}

export default ContactCard;
