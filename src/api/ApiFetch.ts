const BASE_URL = process.env.NEXT_PUBLIC_API_URL


if (!BASE_URL) {
  console.warn("API_URL is not set");
}

type ApiError = {
  status: number;
  message: string;
  details?: unknown;
};

type ApiFetchOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  rawBody?: BodyInit;
  skipJson?: boolean;
};

export async function apiFetch(path: string, options: ApiFetchOptions = {}) {
  const url = `${BASE_URL}${path}`;
  const headers = new Headers(options.headers);

  const hasRawBody = options.rawBody !== undefined;
  const hasJsonBody = options.body !== undefined;

  if (hasJsonBody && !hasRawBody) {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
  }

  // localStorage faqat browserda ishlaydi
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  const res = await fetch(url, {
    ...options,
    headers,
    body: hasRawBody
      ? options.rawBody
      : hasJsonBody
        ? JSON.stringify(options.body)
        : undefined,
  });

  if (res.status === 401) {
    localStorage.removeItem("access_token");
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    } else {
      await localStorage.removeItem("access_token");
    }
  }

  return res;
}
