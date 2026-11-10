import Link from "next/link";
import { EpisodeCard } from "@/components/EpisodeCard";
import { JsonLd } from "@/components/JsonLd";
import { SubscribeButton } from "@/components/SubscribeButton";
import { VideoEmbed } from "@/components/VideoEmbed";
import { latestEpisode, publishedEpisodes } from "@/data/episodes";
import { absUrl, site } from "@/lib/site";

export default function HomePage() {
  const latest = latestEpisode();
  const rest = publishedEpisodes().slice(1);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: absUrl("/images/logo-800.jpg"),
            sameAs: [site.youtube],
          },
        }}
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A YouTube channel</p>
          <h1>
            Back of <em>the Store</em>
          </h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions">
            <SubscribeButton />
            <a className="btn btn-ghost" href="#latest">
              Watch the latest episode
            </a>
          </div>
        </div>
        <figure className="hero-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Illustrated storefront and stockroom for Back of the Store, with shoppers, a forklift, and shelves of cartons."
            height={620}
            src="/images/hero-scene.jpg"
            width={1044}
          />
        </figure>
      </section>

      {latest ? (
        <section className="section" id="latest">
          <div className="section-head">
            <div>
              <p className="eyebrow">Latest episode</p>
              <h2>Episode {String(latest.number).padStart(2, "0")}</h2>
            </div>
            <Link className="text-link" href="/episodes">
              All episodes
            </Link>
          </div>
          <div className="latest">
            <VideoEmbed title={latest.title} youtubeId={latest.youtubeId} />
            <div className="latest-meta">
              <div>
                <h3>
                  <Link href={`/episodes/${latest.slug}`}>{latest.title}</Link>
                </h3>
                <p>
                  <time dateTime={latest.publishedAt}>
                    {new Date(`${latest.publishedAt}T00:00:00Z`).toLocaleDateString(
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
                  {latest.durationLabel}
                </p>
              </div>
              <Link className="btn btn-ghost" href={`/episodes/${latest.slug}`}>
                Sources and chapters
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="section">
          <div className="section-head">
            <h2>Earlier episodes</h2>
          </div>
          <div className="episode-list">
            {rest.map((episode) => (
              <EpisodeCard episode={episode} key={episode.slug} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
