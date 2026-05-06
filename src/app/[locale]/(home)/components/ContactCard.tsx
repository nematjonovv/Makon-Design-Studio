"use client";

import Adress from "@/components/Adress";
import { contactCard } from "@/shared/data/contact.data";
import Socials from "./Socials";
import { useEffect, useState } from "react";
import { ContactData, getContactInfo } from "@/api/get.api";

function ContactCard() {
  const [contact, setContact] = useState<ContactData | null>(null)
  useEffect(() => {
    getContactInfo().then((response) => {
      setContact(response.data);
    }).catch((error) => {
      console.error("Failed to fetch contact info:", error);
    });
  }, [])
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-(--surface) rounded-4xl border border-(--card-border) space-y-6 w-full">

      {/* Contact Info */}
      <div className="space-y-5">

        {/* Phones */}
        <div className="space-y-1">
          <p className="text-xs text-(--card) uppercase tracking-widest font-medium">
            Telefon
          </p>

          <a href={`tel:${contact?.phone.replace(/\s/g, "")}`}
            className="block text-lg sm:text-xl lg:text-2xl text-(--text) font-clash font-medium hover:text-(--secondarytext) transition-colors"
          >
            +{contact?.phone}
          </a>

          <a href={`tel:${contact?.phone2.replace(/\s/g, "")}`}
            className="block text-lg sm:text-xl lg:text-2xl text-(--text) font-clash font-medium hover:text-(--secondarytext) transition-colors"
          >
            +{contact?.phone2}
          </a>
        </div>

        <div className="border-t border-white/8" />

        {/* Email */}
        <div className="space-y-1">
          <p className="text-xs text-(--card) uppercase tracking-widest font-medium">
            Email
          </p>

          <a href={`mailto:${contact?.email}`}
            className="block text-base sm:text-lg text-(--text) font-clash font-medium hover:text-(--secondarytext) transition-colors"
          >
            {contact?.email}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8" />

        {/* Socials + Address */}
        <div className="flex items-center justify-between">
          <Socials contact={contact} />
          <Adress contact={contact} />
        </div>

      </div >

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.963008686148!2d69.256467!3d41.287507!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzE1LjAiTiA2OcKwMTUnMjMuMyJF!5e0!3m2!1sru!2s!4v1778069211287!5m2!1sru!2s"
        loading="lazy"
        className="w-full rounded-2xl border-0 h-55 sm:h-65 lg:h-75"
        style={{ border: 0 }
        }
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div >
  );
}

export default ContactCard;
