export type Source = {
  label: string;
  url: string;
  note?: string;
};

export type Chapter = {
  time: string;
  seconds: number;
  title: string;
};

export type Episode = {
  slug: string;
  number: number;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  publishedAt: string;
  duration: string;
  durationLabel: string;
  summary: string;
  description: string;
  thumbnail: string;
  chapters: Chapter[];
  sources: Source[];
  methodNote: string;
  disclaimer: string;
};

/**
 * Published episodes only. Add a new public episode by appending one object
 * here and dropping its thumbnail in /public/episodes/<slug>.jpg — see README.
 */
export const episodes: Episode[] = [
  {
    slug: "mcdonalds-landlord",
    number: 1,
    title:
      "The Landlord That Sells Burgers? What McDonald’s Filing Actually Says",
    youtubeId: "cZH20GWP5Ys",
    youtubeUrl: "https://youtu.be/cZH20GWP5Ys",
    publishedAt: "2026-11-09",
    duration: "PT3M45S",
    durationLabel: "3:45",
    summary:
      "Is McDonald’s really a real estate company that happens to sell burgers? We test the famous line against McDonald’s own 2025 annual report (Form 10-K): franchised restaurants, rent vs. royalties, who owns the land and buildings, and where the margin actually lives.",
    description:
      "We test the claim that McDonald’s is a real estate company against its 2025 Form 10-K: franchise mix, rent vs. royalties, and where the margin actually lives.",
    thumbnail: "/episodes/mcdonalds-landlord.jpg",
    chapters: [
      { time: "0:03", seconds: 3, title: "Who runs this McDonald’s?" },
      { time: "0:18", seconds: 18, title: "The famous line" },
      { time: "0:31", seconds: 31, title: "Sales are not revenue" },
      { time: "1:16", seconds: 76, title: "The landlord deal" },
      { time: "1:56", seconds: 116, title: "Where the margin lives" },
      { time: "2:45", seconds: 165, title: "So, is it a real estate company?" },
      { time: "3:02", seconds: 182, title: "Trade-offs" },
      { time: "3:32", seconds: 212, title: "Two businesses, one building" },
    ],
    sources: [
      {
        label:
          "McDonald’s Corporation, Form 10-K for fiscal 2025 (filed Feb 24, 2026)",
        url: "https://www.sec.gov/Archives/edgar/data/63908/000006390826000035/mcd-20251231.htm",
        note: "Primary source for every figure in the episode. Company-wide, fiscal 2025, USD.",
      },
    ],
    methodNote:
      'Figures are company-wide fiscal-2025 USD amounts, rounded. “About 13 cents per dollar” is our calculation (franchise revenue ÷ franchised sales), a blended average and not any restaurant’s contract rate.',
    disclaimer:
      "Not affiliated with or endorsed by McDonald’s. Animations are original and illustrative. Narration uses a synthetic voice (Kokoro-82M). Not financial advice.",
  },
];

export function publishedEpisodes(): Episode[] {
  return [...episodes].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : b.number - a.number,
  );
}

export function latestEpisode(): Episode | undefined {
  return publishedEpisodes()[0];
}

export function getEpisode(slug: string): Episode | undefined {
  return episodes.find((episode) => episode.slug === slug);
}
