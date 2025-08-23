import Image from "next/image";
import type { CSSProperties } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  accent: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  accent,
}: ProjectCardProps) {
  const isScreenshot = image.endsWith(".png") || image.endsWith(".jpg") || image.endsWith(".webp");

  return (
    <article
      className="card-project group"
      style={{ "--card-accent": accent } as CSSProperties}
    >
      <div className="card-project-media">
        <div className="card-project-chrome" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div
          className={`relative w-full ${isScreenshot ? "min-h-[220px] bg-slate-950" : "aspect-[16/10] bg-slate-900"}`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={`transition duration-500 group-hover:scale-105 ${
              isScreenshot
                ? "object-contain object-center p-3"
                : "object-cover"
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized={isScreenshot}
          />
        </div>
      </div>
      <div className="card-project-body">
        <span className="card-eyebrow" style={{ color: accent }}>
          Shipped product
        </span>
        <h5 className="mt-2 text-lg font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
        <div className="card-project-footer">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <span className="card-project-arrow shrink-0" aria-hidden>
            →
          </span>
        </div>
      </div>
    </article>
  );
}
