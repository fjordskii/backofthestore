import type { MetadataRoute } from "next";
import { publishedEpisodes } from "@/data/episodes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/episodes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  for (const episode of publishedEpisodes()) {
    pages.push({
      url: `${site.url}/episodes/${episode.slug}`,
      lastModified: episode.publishedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  return pages;
}
