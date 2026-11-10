import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Back of the Store explains the rent, royalties, fees, and float behind everyday businesses, using primary public filings and original diagrams.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.name}`,
    description:
      "How we source episodes, what we will and will not claim, and the disclaimers that apply to every video.",
    url: "/about",
    images: ["/og.jpg"],
  },
};

export default function AboutPage() {
  return (
    <section className="section">
      <p className="eyebrow">Why this channel exists</p>
      <h1 className="page-title">About {site.name}</h1>
      <p className="page-intro">{site.description}</p>

      <div className="about-stack">
        <section className="about-block">
          <h2>The work</h2>
          <p>
            Everyday businesses have a front of the store — the price on the
            sign, the membership card, the thing you walk out holding — and a
            back of the store: rent, royalties, fees, and float. We make short
            explainers about that second part.
          </p>
          <p>
            The visuals are original diagrams, not company logos or trade
            dress. The point is the filing, not a brand recreation.
          </p>
        </section>

        <section className="about-block">
          <h2>How we source</h2>
          <p>
            Every figure comes from a primary public filing, usually a Form
            10-K filed with the U.S. Securities and Exchange Commission. We
            link that filing on the episode page. We do not take numbers from
            recaps, social posts, or secondary write-ups.
          </p>
          <p>
            Amounts are company-wide unless we say otherwise, and we round in
            narration. When we calculate a ratio or share from disclosed
            figures, we label that calculation as ours.
          </p>
        </section>

        <section className="about-block">
          <h2>Disclaimers</h2>
          <p>
            {site.name} is not affiliated with, endorsed by, or sponsored by
            the companies we cover. Company names are used to identify the
            filings we are reading.
          </p>
          <p>
            Nothing here is financial, legal, or investment advice, or a
            recommendation to buy, sell, or hold any security.
          </p>
          <p>
            Narration is synthetic, generated with Kokoro (Kokoro-82M, Apache
            2.0 weights). It does not clone a real person’s voice. Animations
            are original and illustrative.
          </p>
        </section>
      </div>
    </section>
  );
}
