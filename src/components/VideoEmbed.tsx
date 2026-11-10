"use client";

import { useMemo, useState } from "react";
import type { Chapter } from "@/data/episodes";

type Props = {
  youtubeId: string;
  title: string;
  poster?: string;
  chapters?: Chapter[];
};

export function VideoEmbed({ youtubeId, title, poster, chapters }: Props) {
  const [start, setStart] = useState<number | null>(null);

  const src = useMemo(() => {
    const params = new URLSearchParams({ rel: "0" });
    if (start !== null) {
      params.set("start", String(start));
      params.set("autoplay", "1");
    }
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
  }, [youtubeId, start]);

  return (
    <div className="player">
      <div
        className="embed"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      >
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          key={src}
          src={src}
          title={title}
        />
      </div>
      {chapters && chapters.length > 0 ? (
        <ol className="chapters">
          {chapters.map((chapter) => (
            <li key={chapter.seconds}>
              <button
                onClick={() => setStart(chapter.seconds)}
                type="button"
              >
                <time dateTime={`PT${chapter.seconds}S`}>{chapter.time}</time>
                <span>{chapter.title}</span>
              </button>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
