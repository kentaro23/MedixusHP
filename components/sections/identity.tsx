import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function IdentitySection() {
  return (
    <section id="about" className="pb-24 pt-4 sm:pb-28">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="What Is Medixus"
            title={<>Medixusは、医療機関運営を統合する次世代OS。</>}
            description="私たちがつくるのは、予約システムでも単機能SaaSでもない。患者接点から診療後フォロー、AIリスク判定までを一つの運営レイヤーで接続し、医療現場を“点”ではなく“面”で再設計する。"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="surface h-full rounded-3xl p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Legacy Model</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">業務ごとの分断最適</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                予約、問診、コール、オンライン診療、フォローがそれぞれ独立。
                データは断片化し、改善は都度対応に留まる。
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
                <span className="rounded-full border border-ink/10 bg-white px-3 py-1">予約SaaS</span>
                <span className="rounded-full border border-ink/10 bg-white px-3 py-1">オンライン診療</span>
                <span className="rounded-full border border-ink/10 bg-white px-3 py-1">コールシステム</span>
                <span className="rounded-full border border-ink/10 bg-white px-3 py-1">CRM</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <article className="relative h-full overflow-hidden rounded-3xl border border-azure/20 bg-gradient-to-br from-azure/90 via-cyan/80 to-mint/70 p-7 text-white shadow-glow sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.2),transparent_32%)]"
                aria-hidden
              />
              <p className="relative text-xs uppercase tracking-[0.16em] text-white/85">Medixus OS Model</p>
              <h3 className="relative mt-3 text-2xl font-semibold">運営全体の再設計</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                すべての患者接点を単一ストリームへ統合。
                自動化とAIが常時稼働し、現場は「対応」から「先回り」へ移行する。
              </p>
              <div className="relative mt-7 grid gap-3 text-xs sm:grid-cols-2">
                <div className="rounded-2xl border border-white/30 bg-white/10 p-3">予約前後を一連のフローで制御</div>
                <div className="rounded-2xl border border-white/30 bg-white/10 p-3">継続管理と再診勧奨を自動運用</div>
                <div className="rounded-2xl border border-white/30 bg-white/10 p-3">重症化予兆を早期検知</div>
                <div className="rounded-2xl border border-white/30 bg-white/10 p-3">将来のSaMD連携まで拡張可能</div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
