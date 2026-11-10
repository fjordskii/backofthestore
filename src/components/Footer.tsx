import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <strong>{site.name}</strong>
          <span>{site.tagline}</span>
        </p>
        <nav aria-label="Footer">
          <Link href="/episodes">Episodes</Link>
          <Link href="/about">About</Link>
          <a href={site.youtube} rel="noopener noreferrer" target="_blank">
            YouTube
          </a>
        </nav>
      </div>
      <p className="footer-note">
        Not affiliated with the companies we cover. Not financial advice.
        Narration is synthetic (Kokoro). Every figure is sourced from a public
        filing linked on the episode page.
      </p>
    </footer>
  );
}
