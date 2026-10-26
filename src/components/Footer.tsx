"use client"
import { ContactData, getContactInfo } from "@/api/get.api";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";

type MenuItem = { title: string; href: string };

const label = "font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-(--secondarytext)";

function Footer() {
  const t = useTranslations("Footer");
  const menu = useTranslations("Header").raw("menu") as MenuItem[];
  const locale = useLocale() as "uz" | "ru";
  const [contact, setContact] = useState<ContactData | null>(null)

  useEffect(() => {
    getContactInfo().then((response) => {
      setContact(response.data);
    }).catch((error) => {
      console.error("Failed to fetch contact info:", error);
    });
  }, [])

  const socials = [
    { href: contact?.instagram, icon: BsInstagram, name: "Instagram" },
    { href: contact?.telegram, icon: BsTelegram, name: "Telegram" },
    { href: contact?.facebook, icon: BsFacebook, name: "Facebook" },
    { href: contact?.youtube, icon: BsYoutube, name: "YouTube" },
  ].filter((s) => s.href);

  const address = locale === "ru" ? contact?.addressRu : contact?.addressUz;
  const tel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="container mt-20 mb-6">
      <div className="relative rounded-[30px] border border-(--header-border) bg-(--header-bg) px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pt-12 pb-16 md:pb-14">
          <div className="sm:col-span-2 md:col-span-5">
            <Link href="/" aria-label="Makon" className="inline-block">
              <Image src="/main_logo.png" alt="Makon" width={135} height={90} className="-ml-4 -my-5" />
            </Link>
            <p className="mt-4 max-w-xs font-clashGrotesk text-sm leading-relaxed text-(--secondarytext)">
              {t("description")}
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-2.5">
                {socials.map(({ href, icon: Icon, name }) => (
                  <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid size-10 place-items-center rounded-full border border-(--border-strong)/40 text-(--text) transition-colors hover:bg-(--button-bg) hover:border-(--button-bg)"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <nav className="md:col-span-3" aria-label={t("pages")}>
          <p className={label}>{t("pages")}</p>
          <ul className="mt-5 flex flex-col gap-3">
            {menu.map(({ title, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-clashGrotesk text-[15px] text-(--text) hover:text-(--button-bg) transition-colors"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className={label}>{t("contact")}</p>
          <div className="mt-5 flex flex-col gap-3 font-clashGrotesk">
            {contact?.phone && (
              <a href={tel(contact.phone)} className="font-clash text-xl font-semibold text-(--text) hover:text-(--button-bg) transition-colors">
                {contact.phone}
              </a>
            )}
            {contact?.phone2 && (
              <a href={tel(contact.phone2)} className="text-[15px] text-(--text) hover:text-(--button-bg) transition-colors">
                {contact.phone2}
              </a>
            )}
            {contact?.email && (
              <a href={`mailto:${contact.email}`} className="text-[15px] text-(--text) hover:text-(--button-bg) transition-colors">
                {contact.email}
              </a>
            )}
            {address && (
              <p className="text-sm leading-relaxed text-(--secondarytext)">{address}</p>
            )}
          </div>
        </div>
      </div>

        {/* Made by — kartaning o'ng pastki burchagida, kontentga xalaqit bermaydi */}
        <a
          href="https://orbisoft.uz"
          target="_blank"
          rel="noopener"
          className="absolute bottom-3 right-3 md:bottom-4 md:right-5 inline-flex items-center gap-2 rounded-full border border-(--border-muted) px-3 py-1 transition-colors hover:border-(--border-strong)"
        >
          <span className="font-clashGrotesk text-[11px] text-(--text)">Made by</span>
          {/* Rasm foni qora — screen blend uni footer foniga singdiradi */}
          <Image src="/orbisoft.png" alt="Orbisoft" width={2164} height={727} className="h-6 w-auto mix-blend-screen" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
