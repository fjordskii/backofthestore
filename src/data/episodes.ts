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
  {
    slug: "car-wash",
    number: 2,
    title:
      "Why the Car Wash Wants You on a Monthly Plan (What Mister Car Wash’s 10-K Says)",
    youtubeId: "vvc9Yeve7Yk",
    youtubeUrl: "https://youtu.be/vvc9Yeve7Yk",
    publishedAt: "2026-11-10",
    duration: "PT4M21S",
    durationLabel: "4:21",
    summary:
      "A car wash looks like a one-time purchase. But in Mister Car Wash’s 2025 annual report (Form 10-K), about 76% of wash sales came from monthly Unlimited Wash Club members. We walk through the numbers: membership vs single-wash revenue, how a monthly fee is counted day by day, where each revenue dollar goes, the risks the company lists, and the take-private deal that makes this its last annual report.",
    description:
      "We walk through Mister Car Wash’s 2025 Form 10-K: membership vs single-wash revenue, how a monthly fee is counted day by day, and the take-private deal that makes this its last annual report.",
    thumbnail: "/episodes/car-wash.jpg",
    chapters: [
      { time: "0:00", seconds: 0, title: "A car wash or a subscription?" },
      { time: "0:25", seconds: 25, title: "The Unlimited Wash Club" },
      { time: "0:41", seconds: 41, title: "Follow the money" },
      { time: "1:38", seconds: 98, title: "How the fee is counted" },
      { time: "2:13", seconds: 133, title: "Where the money goes" },
      { time: "2:38", seconds: 158, title: "Growth: more sites, more members" },
      { time: "2:52", seconds: 172, title: "The test: wash or subscription?" },
      { time: "3:10", seconds: 190, title: "What can go wrong" },
      { time: "3:27", seconds: 207, title: "Company totals" },
      { time: "3:49", seconds: 229, title: "One more thing: taken private" },
      { time: "4:08", seconds: 248, title: "Two meters, one tunnel" },
    ],
    sources: [
      {
        label:
          "Mister Car Wash, Inc., Form 10-K for fiscal year ended Dec 31, 2025 (signed Feb 27, 2026)",
        url: "https://www.sec.gov/Archives/edgar/data/1853513/000119312526078965/mcw-20251231.htm",
        note: "Primary source for every figure in the episode. Company-wide, fiscal 2025, USD. The company agreed to be acquired by funds affiliated with Leonard Green & Partners in Feb 2026 and filed Form 15 (deregistration) on May 29, 2026, per SEC EDGAR; this is its last annual report as a public company.",
      },
    ],
    methodNote:
      "All figures are company-wide fiscal-2025 USD amounts, rounded. “About 4,100 members per location” is our calculation (2,271K year-end members ÷ 548 locations), not a company metric. The 10-K gives two estimates of how much more a member spends than a one-time customer (“more than four times” in the business section, “approximately seven times” in the risk factors); we show both. The 10-K does not report how often members wash.",
    disclaimer:
      "Not affiliated with or endorsed by Mister Car Wash. Animations are original and illustrative. Narration uses a synthetic voice (Kokoro-82M). Not financial advice.",
  },
  {
    slug: "amc-popcorn",
    number: 3,
    title: "Why Theater Popcorn Costs So Much: What AMC’s Filing Actually Says",
    youtubeId: "x1QFSTHjaLU",
    youtubeUrl: "https://youtu.be/x1QFSTHjaLU",
    publishedAt: "2026-11-10",
    duration: "PT3M54S",
    durationLabel: "3:54",
    summary:
      "A movie ticket and a bucket of popcorn look like two prices on the same night. In AMC’s 2025 annual report (Form 10-K), they behave like two different businesses. We walk through the company’s own numbers: ticket revenue vs film fees, food-and-beverage revenue vs food costs, spending per guest, Stubs memberships, and why the snack counter still is not enough to cover the whole company.",
    description:
      "We walk through AMC’s 2025 Form 10-K: ticket revenue vs film fees, food-and-beverage revenue vs food costs, and why the snack counter still is not enough to cover the whole company.",
    thumbnail: "/episodes/amc-popcorn.jpg",
    chapters: [
      { time: "0:00", seconds: 0, title: "Two prices, one night" },
      { time: "0:24", seconds: 24, title: "Is the movie just bait?" },
      { time: "0:37", seconds: 37, title: "Tickets are shared" },
      { time: "0:54", seconds: 54, title: "The snack counter" },
      { time: "1:12", seconds: 72, title: "What is left" },
      { time: "1:28", seconds: 88, title: "That is not profit" },
      { time: "1:48", seconds: 108, title: "Spending per guest" },
      { time: "2:07", seconds: 127, title: "Higher prices, fewer items" },
      { time: "2:26", seconds: 146, title: "Memberships" },
      { time: "2:42", seconds: 162, title: "So, is the movie just bait?" },
      { time: "3:05", seconds: 185, title: "Even so, a loss" },
      { time: "3:26", seconds: 206, title: "Company totals" },
      { time: "3:41", seconds: 221, title: "Two businesses, one building" },
    ],
    sources: [
      {
        label:
          "AMC Entertainment Holdings, Inc., Form 10-K for fiscal year ended Dec 31, 2025",
        url: "https://www.sec.gov/Archives/edgar/data/1411579/000141157926000016/amc-20251231x10k.htm",
        note: "Primary source for every figure in the episode. Company-wide (U.S. and Europe), fiscal 2025, USD.",
      },
    ],
    methodNote:
      "All figures are company-wide fiscal-2025 USD amounts (U.S. and Europe), rounded. “Left after film fees” and “left after food costs” are our arithmetic from the 10-K (ticket revenue minus film exhibition costs; food-and-beverage revenue minus food-and-beverage costs). They are not profit. The filing does not list popcorn or other item prices; “food and beverage per patron” ($7.62) is an average across all guests, not the price of any one item.",
    disclaimer:
      "Not affiliated with or endorsed by AMC. Animations are original and illustrative. Narration uses a synthetic voice (Kokoro-82M). Not financial advice.",
  },
  {
    slug: "hp-ink",
    number: 4,
    title:
      "Why the Printer Is Cheap and the Ink Isn’t: What HP’s Filing Actually Says",
    youtubeId: "Yl8GuCYhAPE",
    youtubeUrl: "https://youtu.be/Yl8GuCYhAPE",
    publishedAt: "2026-11-10",
    duration: "PT4M39S",
    durationLabel: "4:39",
    summary:
      "HP’s printing business brought in about $16.7 billion in fiscal 2025, and about two-thirds of that was supplies — ink and toner, not printers. We test the “cheap printer, expensive ink” idea against HP’s own annual report: the supplies split, printing’s margin versus PCs, what the 10-K does not disclose, Instant Ink plan terms (as of November 9, 2026), and the Dynamic Security lawsuits the filing describes.",
    description:
      "We test the “cheap printer, expensive ink” idea against HP’s 2025 annual report: the supplies split, printing’s margin versus PCs, Instant Ink plan terms, and the Dynamic Security lawsuits the filing describes.",
    thumbnail: "/episodes/hp-ink.jpg",
    chapters: [
      { time: "0:00", seconds: 0, title: "Where HP’s printing money comes from" },
      { time: "0:18", seconds: 18, title: "Razors and blades" },
      { time: "0:32", seconds: 32, title: "Supplies lead printing" },
      { time: "0:57", seconds: 57, title: "Printing versus PCs" },
      { time: "1:19", seconds: 79, title: "What HP does not say" },
      { time: "1:33", seconds: 93, title: "The installed base" },
      { time: "1:53", seconds: 113, title: "Fewer printers, fewer pages" },
      { time: "2:07", seconds: 127, title: "Cheaper cartridges" },
      { time: "2:26", seconds: 146, title: "Subscribe to ink" },
      { time: "2:48", seconds: 168, title: "Counted by the page" },
      { time: "3:06", seconds: 186, title: "The fine print" },
      { time: "3:25", seconds: 205, title: "Dynamic Security" },
      { time: "3:50", seconds: 230, title: "So, why is the ink expensive?" },
      { time: "4:09", seconds: 249, title: "Company totals" },
      { time: "4:27", seconds: 267, title: "One printer, two meters" },
    ],
    sources: [
      {
        label: "HP Inc., Form 10-K for the fiscal year ended Oct 31, 2025",
        url: "https://www.sec.gov/Archives/edgar/data/47217/000004721725000071/hpq-20251031.htm",
        note: "Primary source for the episode’s financial figures. USD, fiscal 2025.",
      },
      {
        label:
          "HP Instant Ink Terms of Service (last updated April 15, 2025)",
        url: "https://instantink.hpconnected.com/us/en/v2/terms",
        note: "Source for Instant Ink plan terms described in the episode, including page counting, rollover caps, and cancellation terms.",
      },
      {
        label: "HP Instant Ink US plans page, retrieved Nov 9, 2026",
        url: "https://www.hp.com/us-en/subscriptions/instant-ink/plans.html",
        note: "Source for Instant Ink prices as shown on Nov 9, 2026. Prices and terms can change.",
      },
    ],
    methodNote:
      "All dollar figures are USD, fiscal 2025, rounded. “Supplies were about 65%” and “printing is about 30% of segment revenue” are our arithmetic from the 10-K segment table. The filing does not report a cartridge or ink margin, and we do not invent one. Instant Ink prices and terms are as shown on HP’s site on Nov 9, 2026, and can change (the Terms allow price changes with 30 days’ notice). The 3× page rollover cap described in the video is the ink-plan cap in the Terms; toner plans are capped at 2×.",
    disclaimer:
      "Not affiliated with or endorsed by HP. Animations are original and illustrative. Narration uses a synthetic voice (Kokoro-82M). Not financial advice.",
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
