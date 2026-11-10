import Link from "next/link";
import { site } from "@/lib/site";
import { SubscribeButton } from "./SubscribeButton";

export function Header() {
  return (
    <header className="site-header">
      <div className="awning" aria-hidden="true" />
      <div className="header-inner">
        <Link className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="brand-logo"
            height={48}
            src="/images/logo.png"
            width={48}
          />
          <span className="brand-text">
            <span className="brand-name">
              Back of <em>the Store</em>
            </span>
            <span className="brand-tagline">{site.tagline}</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="nav">
          <Link href="/episodes">Episodes</Link>
          <Link href="/about">About</Link>
          <SubscribeButton className="btn btn-primary btn-compact" />
        </nav>
      </div>
    </header>
  );
}
