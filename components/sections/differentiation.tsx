import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiationAxes } from "@/lib/content";

export function DifferentiationSection() {
  return (
    <section id="differentiation" className="pb-24 sm:pb-28">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Differentiation"
            title={<>既存カテゴリの延長ではなく、医療機関運営OSという新しい座標。 </>}
            description="予約SaaS、オンライン診療、CRM、コールシステムのどれとも違う。Medixusはそれらを横断して統合し、運営思想そのものをアップデートする。"
          />
        </Reveal>

        <div className="space-y-3">
          {differentiationAxes.map((row, index) => (
            <Reveal key={row.axis} delay={index * 0.04}>
              <article className="grid gap-4 rounded-2xl border border-ink/10 bg-white/75 p-5 shadow-panel md:grid-cols-[180px_1fr_1fr] md:items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Axis</p>
                  <h3 className="mt-1 text-base font-semibold text-ink">{row.axis}</h3>
                </div>
                <div className="rounded-xl border border-ink/10 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">従来</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{row.old}</p>
                </div>
                <div className="rounded-xl border border-azure/25 bg-gradient-to-br from-azure/5 to-cyan/10 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-azure/80">Medixus</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{row.medixus}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
