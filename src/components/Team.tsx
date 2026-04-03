import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { advisors, teamMembers } from "@/lib/constants";

function initials(name: string) {
  const compact = name.replace(/[\s　]/g, "");
  return compact.slice(0, 2);
}

export function Team() {
  return (
    <section id="team" className="section-shell bg-background py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading title="医学×テクノロジー×事業開発。領域横断のファウンダーチーム。" align="center" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.role} delay={index * 0.1}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-cta-gradient text-lg font-bold text-white">
                    {initials(member.name)}
                  </div>
                  <div>
                    <p className="font-en text-xs font-semibold uppercase tracking-[0.16em] text-accent">{member.role}</p>
                    <h3 className="mt-1 text-xl font-bold text-primary">{member.name}</h3>
                    <p className="mt-2 text-sm font-medium text-primary/80">{member.affiliation}</p>
                    <p className="mt-3 text-sm leading-relaxed text-textSecondary">{member.strength}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft" delay={0.2}>
          <h3 className="text-lg font-bold text-primary">アドバイザリー</h3>
          <ul className="mt-4 grid gap-3 text-sm text-textSecondary md:grid-cols-2">
            {advisors.map((advisor) => (
              <li key={advisor.name} className="rounded-xl bg-background px-4 py-3">
                <span className="font-semibold text-primary">{advisor.name}</span>
                <span className="ml-2">— {advisor.expertise}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
