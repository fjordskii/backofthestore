import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="eyebrow">404</p>
      <h1 className="page-title">That page is not on the shelf.</h1>
      <p className="page-intro">
        The link may be outdated, or the episode is not published yet.
      </p>
      <p>
        <Link className="text-link" href="/">
          Back to the front
        </Link>
        <span aria-hidden="true"> · </span>
        <Link className="text-link" href="/episodes">
          All episodes
        </Link>
      </p>
    </section>
  );
}
