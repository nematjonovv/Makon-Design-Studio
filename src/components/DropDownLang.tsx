"use client";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

type Locale = (typeof routing.locales)[number];

export default function LangDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  // Tashqariga bosganda yopilsin
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const onChange = (locale: Locale) => {
    if (locale === currentLocale) return;
    setOpen(false);
    router.replace(pathname, { locale });
    router.refresh();
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-(--text) cursor-pointer"
      >
        {currentLocale.toUpperCase()}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-8 left-0 z-50 min-w-[80px]
          bg-(--surface) border border-(--border-muted)
          rounded-xl overflow-hidden shadow-lg"
        >
          {routing.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => onChange(locale as Locale)}
              disabled={locale === currentLocale}
              className={`w-full px-4 py-2 text-left text-sm cursor-pointer transition-colors
                ${locale === currentLocale
                  ? "text-(--secondarytext) cursor-default"
                  : "text-(--text) hover:bg-(--card)"
                }`}
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}