import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { urgencySignals } from "@/lib/content";

export function WhyNowSection() {
  return (
    <section id="why-now" className="pb-24 sm:pb-28">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Now"
            title={<>医療の断片を統合できる、最初の現実的なタイミング。</>}
            description="人手不足、慢性疾患の増加、患者接点の多様化。課題が同時に進行する一方で、AIと運営基盤は実装フェーズに入った。今は“改善”ではなく“再設計”を選ぶべき局面。"
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          {urgencySignals.map((item, index) => (
            <Reveal key={item.title} delay={0.04 * index}>
              <article className="surface h-full rounded-2xl p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-azure/85">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
