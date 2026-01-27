"use client";

import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");

  return (
    <div
      className="
    w-full
    max-w-full sm:max-w-[520px]
    mx-auto
    bg-(--surface)
    rounded-[28px]
    p-6 sm:p-8 lg:p-10
    lg:h-full
    border
    border-(--card-border)
  "
    >
      {/* Title */}
      <h2
        className="
      text-center
      text-lg sm:text-xl
      font-clash font-semibold
      text-(--text)
      mb-5 sm:mb-6
    "
      >
        {t("formTitle")}
      </h2>

      {/* Form */}
      <form className="flex flex-col gap-3 sm:gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder={t("PHname")}
            className="
          w-full
          bg-white/80
          rounded-[12px]
          px-4 py-2.5
          text-sm
          outline-none
        "
          />
          <input
            type="tel"
            placeholder="+998 90 123 45 67"
            className="
          w-full
          bg-white/80
          rounded-[12px]
          px-4 py-2.5
          text-sm
          outline-none
        "
          />
        </div>

        {/* Service dropdown */}
        <select
          className="
        w-full
        bg-white/80
        rounded-[12px]
        px-4 py-2.5
        text-sm
        outline-none
        text-gray-600
      "
          defaultValue=""
        >
          <option value="" disabled>
            {t("PHservice")}
          </option>
          {/* intentionally empty */}
        </select>

        {/* Comment */}
        <textarea
          placeholder={t("PHcomment")}
          rows={4}
          className="
        w-full
        bg-white/80
        rounded-[12px]
        px-4 py-3
        text-sm
        outline-none
        resize-none
        min-h-[120px] sm:min-h-[140px]
      "
        />

        {/* Where dropdown */}
        <select
          className="
        w-full
        bg-white/80
        rounded-[12px]
        px-4 py-2.5
        text-sm
        outline-none
        text-gray-600
      "
          defaultValue=""
        >
          <option value="" disabled>
            {t("PHwhere")}
          </option>
          {/* intentionally empty */}
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="
          bg-(--button-bg)
          cursor-pointer
        mt-2
        w-full
 hover:bg-(--button-hover)
        text-white
        rounded-xl
        py-3
        text-sm
        font-medium
        transition
      "
        >
          Ariza qoldirish
        </button>
      </form>
    </div>
  );
}
