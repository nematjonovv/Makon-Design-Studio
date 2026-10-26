import { notFound } from "next/navigation";

// Mavjud bo'lmagan /{locale}/... yo'llar [locale]/not-found.tsx ni ko'rsatsin
export default function CatchAllPage() {
  notFound();
}
