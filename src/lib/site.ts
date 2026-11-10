export const site = {
  name: "Back of the Store",
  tagline: "The business behind the counter.",
  description:
    "Short explainers of where everyday businesses really make their money: the rent, royalties, fees and float. Every episode is sourced from public filings and uses original diagrams. We're not affiliated with the companies we cover, and nothing here is financial advice.",
  url: "https://backofthestore.studio",
  youtube: "https://www.youtube.com/@backofthestore",
  youtubeSubscribe: "https://www.youtube.com/@backofthestore?sub_confirmation=1",
} as const;

export function absUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const prefix = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${prefix === "/" ? "/" : prefix}`;
}
