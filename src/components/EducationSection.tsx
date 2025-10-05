import { education } from "@/data/portfolio";
export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Education</p>
        <div className="glass mt-6 rounded-2xl border border-white/8 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{education.degree}</h2>
          <p className="mt-2 text-lg text-slate-300">{education.school}</p>
          <p className="mt-1 text-slate-500">{education.period}</p>
        </div>
      </div>
    </section>
  );
}
