import { skills } from "@/data/portfolio";
export default function SkillsSection() {
  return (
    <section id="skills" className="border-y border-white/6 bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Technical skills</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Tools & technologies</h2>
        <p className="mt-4 max-w-2xl text-slate-400">Full stack development, cloud infrastructure, and AI/ML integration across enterprise and regulated industries.</p>
        <ul className="mt-10 flex flex-wrap gap-3">{skills.map((skill) => (<li key={skill} className="skill-pill">{skill}</li>))}</ul>
      </div>
    </section>
  );
}
