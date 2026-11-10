import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { VideoEmbed } from "@/components/VideoEmbed";
import { episodes, getEpisode } from "@/data/episodes";
import { absUrl, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return episodes.map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) return {};

  const url = `/episodes/${episode.slug}`;
  const title = episode.title;
  const description = episode.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "video.other",
      title,
      description,
      url,
      images: [
        {
          url: episode.thumbnail,
          width: 1280,
          height: 720,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [episode.thumbnail],
    },
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();

  const pageUrl = absUrl(`/episodes/${episode.slug}`);
  const published = `${episode.publishedAt}T12:00:00-05:00`;

  return (
    <article className="section episode-layout">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: episode.title,
          description: episode.summary,
          thumbnailUrl: absUrl(episode.thumbnail),
          uploadDate: published,
          duration: episode.duration,
          embedUrl: `https://www.youtube-nocookie.com/embed/${episode.youtubeId}`,
          contentUrl: episode.youtubeUrl,
          url: pageUrl,
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: {
              "@type": "ImageObject",
              url: absUrl("/images/logo-800.jpg"),
            },
          },
        }}
      />
      <header>
        <p className="eyebrow">
          Episode {String(episode.number).padStart(2, "0")}
          <span aria-hidden="true"> · </span>
          <time dateTime={episode.publishedAt}>
            {new Date(`${episode.publishedAt}T00:00:00Z`).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              },
            )}
          </time>
          <span aria-hidden="true"> · </span>
          {episode.durationLabel}
        </p>
        <h1>{episode.title}</h1>
        <p className="page-intro">{episode.summary}</p>
      </header>

      <VideoEmbed
        chapters={episode.chapters}
        title={episode.title}
        youtubeId={episode.youtubeId}
      />

      <p>
        <a
          className="text-link"
          href={episode.youtubeUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Watch on YouTube
        </a>
      </p>

      <section className="sources">
        <h2>Sources</h2>
        <ol>
          {episode.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} rel="noopener noreferrer" target="_blank">
                {source.label}
              </a>
              {source.note ? (
                <span className="source-note">{source.note}</span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="method">
        <h2>How we use the numbers</h2>
        <p>{episode.methodNote}</p>
      </section>

      <section className="disclaimer">
        <h2>A note on this episode</h2>
        <p>{episode.disclaimer}</p>
      </section>
    </article>
  );
}
