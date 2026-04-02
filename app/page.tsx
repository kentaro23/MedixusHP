import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeHighlights, moduleLines, principles, whyNow } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-edge/70 bg-hero-ambient">
        <div className="grid-faint" aria-hidden />
        <div className="site-shell section-gap relative grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="eyebrow">Medical DX / AI / Operating System</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.2rem,5.5vw,5rem)] font-semibold leading-[1.03] text-ink">
              医療機関運営を、
              <br />
              診療前後までつながるOSへ。
            </h1>
            <p className="mt-7 max-w-2xl section-lead">
              Medixusは、予約・問診・患者コミュニケーション・フォローアップ・AIリスク判定を統合し、
              現場オペレーションと患者体験を同時に再設計する医療インフラ企業です。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                お問い合わせ
              </Link>
              <Link
                href="/platform"
                className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/35"
              >
                プロダクトを見る
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {homeHighlights.map((item) => (
                <span key={item} className="rounded-full border border-ink/12 bg-white/80 px-3 py-1.5 text-xs text-slate">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="panel relative rounded-3xl p-6 sm:p-8">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand/80">Operations Signal</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">Medixus OS Control</h2>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-edge bg-white px-4 py-3">
                <p className="text-xs text-slate">患者接点の統合率</p>
                <p className="mt-1 text-2xl font-semibold text-ink">Unified</p>
              </div>
              <div className="rounded-2xl border border-edge bg-white px-4 py-3">
                <p className="text-xs text-slate">診療後フォロー</p>
                <p className="mt-1 text-2xl font-semibold text-ink">Automated Loop</p>
              </div>
              <div className="rounded-2xl border border-edge bg-white px-4 py-3">
                <p className="text-xs text-slate">AI判定</p>
                <p className="mt-1 text-2xl font-semibold text-ink">Risk Prioritized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Concept"
            title="Medixusは、単機能SaaSではなく医療機関運営の統合OS。"
            description="予約システム、オンライン診療、CRMを個別に積み重ねるのではなく、医療機関の運営そのものを再設計する。私たちはそのためのコア基盤を提供します。"
          />

          <div className="space-y-4">
            {principles.map((item) => (
              <article key={item.title} className="panel rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-y border-edge/70 bg-white/70">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Product Architecture"
            title="FlowからRemoteまで、ひとつの運営文脈で接続する。"
            description="Medixus OSの各モジュールは、機能単位で独立するのではなく、患者導線と現場運営の連続性を前提に連携します。"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {moduleLines.map((module) => (
              <article key={module.name} className="panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-brand/80">{module.name}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{module.subtitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{module.body}</p>
              </article>
            ))}
          </div>

          <div className="panel mt-4 rounded-2xl border-brand/25 bg-gradient-to-r from-brand/5 to-cyan/10 p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-brand/80">Core Runtime</p>
            <p className="mt-2 text-lg font-semibold text-ink">
              患者接点、業務フロー、AI判定を同じデータ基盤で扱うことで、運営の一貫性と拡張性を両立する。
            </p>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Why Now"
            title="いま必要なのは、局所改善ではなく運営再設計。"
            description="人手不足と慢性疾患増加が同時に進む中、AIと患者接点の技術は実装段階に入りました。医療体験を統合できる現実的なタイミングです。"
          />

          <ol className="space-y-3">
            {whyNow.map((point, index) => (
              <li key={point} className="panel rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-brand/75">0{index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-gap border-y border-edge/70 bg-white/80">
        <div className="site-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Future Roadmap</p>
            <h2 className="section-title mt-5">音声・ウェアラブル・SaMD連携まで見据えた設計。</h2>
            <p className="section-lead mt-5">
              Medixusは、今の運営課題を解決するだけでなく、予兆ベース医療と自律運営に向けた基盤を段階的に実装していきます。
            </p>
          </div>
          <div className="panel rounded-2xl p-6">
            <p className="text-sm font-semibold text-ink">次の展開</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate">
              <li>音声UIによる高齢者フォローの自然化</li>
              <li>リング/ネックレス等の生体データ連携</li>
              <li>慢性疾患の継続管理とリスク介入の標準化</li>
              <li>医療機関運営の自動実行レイヤーの高度化</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="site-shell panel rounded-3xl p-8 sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-5">導入相談・提携検討を受け付けています。</h2>
          <p className="section-lead mt-5 max-w-2xl">
            クリニック導入、共同検証、プロダクト連携まで。目的と体制に合わせて、最適な進め方を提案します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
              お問い合わせへ
            </Link>
            <Link href="/partnerships" className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink">
              導入・提携の詳細
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
