import { site } from "@/lib/site";

type Props = {
  className?: string;
};

export function SubscribeButton({ className = "btn btn-primary" }: Props) {
  return (
    <a
      className={className}
      href={site.youtubeSubscribe}
      rel="noopener noreferrer"
      target="_blank"
    >
      Subscribe on YouTube
    </a>
  );
}
