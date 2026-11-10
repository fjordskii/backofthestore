import type { Metadata } from "next";
import { EpisodeCard } from "@/components/EpisodeCard";
import { publishedEpisodes } from "@/data/episodes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Episodes",
  description: `Every Back of the Store episode, with sources from public filings. ${site.tagline}`,
  alternates: { canonical: "/episodes" },
  openGraph: {
    title: `Episodes: ${site.name}`,
    description: `Every Back of the Store episode, with sources from public filings.`,
    url: "/episodes",
    images: ["/og.jpg"],
  },
};

export default function EpisodesPage() {
  const list = publishedEpisodes();

  return (
    <section className="section">
      <p className="eyebrow">The catalog</p>
      <h1 className="page-title">Episodes</h1>
      <p className="page-intro">
        Every published episode is here. Under each video we link the public
        filing we used.
      </p>
      {list.length > 0 ? (
        <div className="episode-list">
          {list.map((episode) => (
            <EpisodeCard episode={episode} key={episode.slug} />
          ))}
        </div>
      ) : (
        <p className="empty-note">No episodes have been published yet.</p>
      )}
    </section>
  );
}
