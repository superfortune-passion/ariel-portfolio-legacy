import FadeIn from "@/components/FadeIn";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
        <div className="contact-card rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/10 p-10 md:p-14">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Interested in senior engineering, AI platform work, or full stack
            leadership? I&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary inline-flex items-center justify-center"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="btn-secondary inline-flex items-center justify-center"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
