import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">{profile.location}</p>
      </div>
    </footer>
  );
}
