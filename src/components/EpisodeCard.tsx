import Link from "next/link";
import type { Episode } from "@/data/episodes";

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="episode-card">
      <Link className="episode-card-media" href={`/episodes/${episode.slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`Thumbnail for episode ${episode.number}: ${episode.title}`}
          height={720}
          src={episode.thumbnail}
          width={1280}
        />
      </Link>
      <div className="episode-card-body">
        <p className="eyebrow">
          Episode {String(episode.number).padStart(2, "0")}
          <span aria-hidden="true"> · </span>
          <time dateTime={episode.publishedAt}>
            {formatDate(episode.publishedAt)}
          </time>
          <span aria-hidden="true"> · </span>
          {episode.durationLabel}
        </p>
        <h2>
          <Link href={`/episodes/${episode.slug}`}>{episode.title}</Link>
        </h2>
        <p>{episode.summary}</p>
        <p className="episode-card-links">
          <Link className="text-link" href={`/episodes/${episode.slug}`}>
            Episode page
          </Link>
          <a
            className="text-link"
            href={episode.youtubeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Watch on YouTube
          </a>
        </p>
      </div>
    </article>
  );
}
