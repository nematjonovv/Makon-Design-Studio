"use client";

import { sendRequest } from "@/api/get.api";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [form, setForm] = useState({
    name: "",
    number: "",
    about: "",
    heardFrom: "",
  });
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true)
      const res = await sendRequest(form)
      if (res.success) {
        setLoading(false)
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 3000)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className="bg-(--surface) w-full rounded-2xl h-[80%] p-6 sm:p-8 border border-(--border-muted)">
      {isSuccess ? (
        /* Success state */
        <div className="flex flex-col items-center h-full  justify-center gap-3 py-12 animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-400/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg">So'rovingiz yuborildi!</p>
          <p className="text-gray-500 text-sm text-center">Tez orada siz bilan bog'lanamiz.</p>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs text-(--card) uppercase tracking-widest font-medium mb-1">
              {t("formSubTitle")}
            </p>
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              {t("formTitle")}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Ismingiz</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Azizbek"
                  className="w-full bg-[#1a1d27] border border-white/10 focus:border-(--card) rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Telefon</label>
                <input
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className="w-full bg-[#1a1d27] border border-white/10 focus:border-(--button-bg) rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Izoh</label>
              <textarea
                name="about"
                value={form.about}
                onChange={handleChange}
                placeholder="3 xonali kvartira dizayni kerak..."
                rows={3}
                className="w-full bg-[#1a1d27] border border-white/10 focus:border-(--button-bg) rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400">Bizni qayerdan topdingiz?</label>
              <select
                name="heardFrom"
                value={form.heardFrom}
                onChange={handleChange}
                className="w-full bg-[#1a1d27] border border-white/10 focus:border-(--button-bg) rounded-xl px-4 py-2.5 text-sm text-gray-400 outline-none transition-colors"
              >
                <option value="" disabled>Tanlang...</option>
                <option value="INSTAGRAM">Instagram</option>
                <option value="TELEGRAM">Telegram</option>
                <option value="YOUTUBE">YouTube</option>
                <option value="BANNER">Banner</option>
                <option value="FRIEND">Do'stdan</option>
                <option value="OTHER">Boshqa</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full bg-(--button-bg) hover:bg-(--button-hover) active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl py-3 text-sm font-semibold transition-all duration-150 cursor-pointer"
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin mx-auto" />
              ) : (
                "Ariza qoldirish →"
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
