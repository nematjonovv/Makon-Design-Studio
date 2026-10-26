const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

/**
 * Backend DB'da nisbiy path saqlaydi (/uploads/team/abc.webp).
 * Uni API server manziliga ulab, to'liq URL yasaydi.
 */
export function mediaUrl(path?: string | null) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_URL.replace(/\/$/, "")}${path}`;
}
