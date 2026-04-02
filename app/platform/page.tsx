import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { moduleLines } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "プロダクト",
  description: "Medixus OSの構成と、医療機関運営を再設計するためのプロダクト思想を紹介します。"
};

export default function PlatformPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Platform"
        title="Medixus OS"
        description="予約前後の患者体験と現場オペレーションを一つの基盤で統合し、継続運用とAI支援を実装するための医療OS。"
      />

      <section className="section-gap">
        <div className="site-shell grid gap-4 md:grid-cols-2">
          {moduleLines.map((module) => (
            <article key={module.name} className="panel rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand/80">{module.name}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">{module.subtitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{module.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap border-y border-edge/70 bg-white/75">
        <div className="site-shell grid gap-5 lg:grid-cols-3">
          <article className="panel rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-ink">統合データ基盤</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              接点データ、オペレーションデータ、臨床関連データを文脈付きで統合し、業務と判断の精度を高めます。
            </p>
          </article>
          <article className="panel rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-ink">運用自動化レイヤー</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              再案内、フォロー連絡、状態確認など反復業務を自動化し、現場負荷と抜け漏れを同時に低減します。
            </p>
          </article>
          <article className="panel rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-ink">AI支援レイヤー</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              予兆に基づく優先度判定を提供し、医療者が介入すべき対象を明確化します。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
