import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="min-h-screen w-screen bg-(--surface)">
      <div
        className="
        min-h-screen w-full
        // bg-[url('/images/notofund.png')]
        bg-no-repeat bg-cover bg-center
        flex items-center justify-center
      "
      >
        <div className="absolute inset-0 bg-black/10" />

        <Link
          href="/"
          className="
            inline-flex mt-8
            px-6 py-3 rounded-xl
            bg-(--button-bg) text-white
            hover:opacity-90 transition cursor-pointer z-50
          "
        >
          {t("back")}
        </Link>
      </div>
    </section>
  );
}
