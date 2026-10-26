import Link from "next/link";

// Tilsiz URL'lar uchun (root layout'da <html> yo'q, shuning uchun o'zi beradi)
export default function RootNotFound() {
  return (
    <html lang="uz">
      <body className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <Link href="/uz" className="px-6 py-3 rounded-xl bg-(--button-bg) text-white hover:opacity-90 transition">
          Bosh sahifaga qaytish
        </Link>
      </body>
    </html>
  );
}
