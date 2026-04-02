import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { osModules } from "@/lib/content";

const placement: Record<string, string> = {
  flow: "md:col-span-4 md:col-start-1 md:row-start-1",
  intelligence: "md:col-span-4 md:col-start-5 md:row-start-1",
  connect: "md:col-span-4 md:col-start-9 md:row-start-1",
  care: "md:col-span-4 md:col-start-1 md:row-start-3",
  remote: "md:col-span-4 md:col-start-9 md:row-start-3"
};

export function OsArchitectureSection() {
  return (
    <section id="platform" className="pb-24 sm:pb-28">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Product Architecture"
            title={<>Medixus OSは、モジュールではなく運営全体を繋ぐ。 </>}
            description="Flow / Connect / Care / Intelligence / Remoteが単独で動くのではなく、OSコア上で相互連携。現場オペレーション、患者体験、AI判断が同一文脈で循環する。"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[32px] border border-ink/10 bg-white/70 p-5 shadow-panel sm:p-8">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="arch" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(79,111,255,0.44)" />
                  <stop offset="100%" stopColor="rgba(86,214,255,0.18)" />
                </linearGradient>
              </defs>
              <path d="M50 50 L16 17" stroke="url(#arch)" strokeWidth="0.7" fill="none" />
              <path d="M50 50 L50 17" stroke="url(#arch)" strokeWidth="0.7" fill="none" />
              <path d="M50 50 L84 17" stroke="url(#arch)" strokeWidth="0.7" fill="none" />
              <path d="M50 50 L16 85" stroke="url(#arch)" strokeWidth="0.7" fill="none" />
              <path d="M50 50 L84 85" stroke="url(#arch)" strokeWidth="0.7" fill="none" />
              <circle cx="50" cy="50" r="2.1" fill="rgba(67,246,198,0.7)" className="pulse" />
            </svg>

            <div className="relative grid gap-4 md:grid-cols-12 md:grid-rows-[1fr_auto_1fr]">
              {osModules.map((module) => (
                <article
                  key={module.id}
                  className={`surface rounded-2xl p-5 ${placement[module.id] ?? "md:col-span-4"}`}
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-azure/80">{module.label}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{module.summary}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {module.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs text-muted"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              ))}

              <article className="relative overflow-hidden rounded-2xl border border-azure/25 bg-gradient-to-br from-white to-azure/10 p-6 md:col-span-4 md:col-start-5 md:row-start-2">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(79,111,255,0.24),transparent_36%),radial-gradient(circle_at_20%_80%,rgba(86,214,255,0.22),transparent_38%)]"
                  aria-hidden
                />
                <p className="relative text-xs uppercase tracking-[0.16em] text-azure/85">Core Runtime</p>
                <h3 className="relative mt-2 text-2xl font-semibold text-ink">Medixus OS</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  各モジュールを単一イベント基盤で接続し、患者接点・運営・AI判定を同時最適化する。
                </p>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
