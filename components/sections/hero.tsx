import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const pipelines = [
  { label: "Flow", text: "予約→問診→呼び出しを自動同期", score: "Live" },
  { label: "Care", text: "診療後フォローを自動実行", score: "Active" },
  { label: "Intelligence", text: "重症化予兆を優先度判定", score: "AI Ready" }
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="soft-grid" aria-hidden />
      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-azure/90 shadow-panel">
            <span className="h-2 w-2 rounded-full bg-mint pulse" />
            Next-generation Medical Infrastructure
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              医療機関の運営を、
              <br />
              <span className="bg-gradient-to-r from-azure via-cyan to-mint bg-clip-text text-transparent">
                OSから再設計する。
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              予約の先まで、診療の後まで。Medixusは患者接点・業務自動化・遠隔モニタリング・AI判定を統合し、
              医療機関の標準OSをつくる。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#cta"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              デモを相談する
            </Link>
            <Link
              href="#platform"
              className="rounded-full border border-ink/15 bg-white/75 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              Medixus OSを見る
            </Link>
          </div>

          <div className="grid gap-3 text-sm text-muted sm:grid-cols-3">
            <div className="rounded-2xl border border-ink/10 bg-white/60 px-4 py-3">患者接点の統合レイヤー</div>
            <div className="rounded-2xl border border-ink/10 bg-white/60 px-4 py-3">継続フォローの自動運用</div>
            <div className="rounded-2xl border border-ink/10 bg-white/60 px-4 py-3">重症化予測AIの実装</div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="signal-ring left-[12%] top-[8%] h-[74%] w-[74%]" />
            <div className="signal-ring left-[20%] top-[16%] h-[58%] w-[58%]" />
            <div className="signal-ring left-[4%] top-[0%] h-[88%] w-[88%]" />
          </div>

          <div className="glass relative rounded-[28px] p-6 shadow-glow sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-azure/90">Medixus OS Control Plane</p>
                <p className="mt-2 text-lg font-semibold text-ink">Unified Care Runtime</p>
              </div>
              <span className="rounded-full border border-mint/40 bg-mint/15 px-3 py-1 text-xs font-semibold text-ink">
                Syncing
              </span>
            </div>

            <div className="space-y-3">
              {pipelines.map((pipeline, index) => (
                <div
                  key={pipeline.label}
                  className="surface relative overflow-hidden rounded-2xl p-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cyan/20 to-transparent pulse"
                    aria-hidden
                  />
                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-ink">{pipeline.label}</p>
                      <p className="mt-1 text-xs text-muted">{pipeline.text}</p>
                    </div>
                    <span className="rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-[11px] font-semibold text-ink">
                      {pipeline.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-muted">
              <div className="rounded-xl border border-ink/10 bg-white/70 px-3 py-2">
                <p className="font-semibold text-ink">Touchpoint</p>
                <p>LINE / Call</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/70 px-3 py-2">
                <p className="font-semibold text-ink">Care Loop</p>
                <p>Follow-up</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white/70 px-3 py-2">
                <p className="font-semibold text-ink">AI Insight</p>
                <p>Risk score</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
