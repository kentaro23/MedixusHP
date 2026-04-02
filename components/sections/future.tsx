import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { futureVectors } from "@/lib/content";

export function FutureSection() {
  return (
    <section id="future" className="pb-24 sm:pb-28">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Future Expansion"
            title={<>治療後の時間まで設計する。医療は、予測可能な運営へ。</>}
            description="Medixus OSは、音声UI・ウェアラブル・SaMD連携へ拡張可能な基盤を持つ。医療機関は、来院ベースの受け身運営から、先回りする継続ケア運営へ進化できる。"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[32px] border border-ink/10 bg-gradient-to-br from-[#0f1728] via-[#182341] to-[#1b2950] p-8 text-white shadow-glow sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(86,214,255,0.28),transparent_36%),radial-gradient(circle_at_85%_78%,rgba(67,246,198,0.24),transparent_40%)]"
              aria-hidden
            />
            <p className="relative text-sm uppercase tracking-[0.16em] text-cyan/85">Beyond Today</p>
            <h3 className="relative mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              具合が悪くなってから始まる医療を、
              <br />
              兆候の時点で動く医療へ。
            </h3>

            <div className="relative mt-8 grid gap-4 md:grid-cols-2">
              {futureVectors.map((vector, index) => (
                <Reveal key={vector.title} delay={0.1 + index * 0.06}>
                  <article className="h-full rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-white">{vector.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{vector.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
