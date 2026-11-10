export const site = {
  name: "Back of the Store",
  tagline: "The business behind the counter.",
  description:
    "Short explainers of the rent, royalties, fees, and float behind everyday businesses — sourced from public filings, with original diagrams.",
  url: "https://backofthestore.studio",
  youtube: "https://www.youtube.com/@backofthestore",
  youtubeSubscribe: "https://www.youtube.com/@backofthestore?sub_confirmation=1",
} as const;

export function absUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const prefix = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${prefix === "/" ? "/" : prefix}`;
}
