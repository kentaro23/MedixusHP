import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { companyFacts, companyValues } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "会社情報",
  description: "Medixusのミッション、価値観、会社情報を掲載しています。"
};

export default function CompanyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Company"
        title="医療の断片をつなぎ、次の標準をつくる。"
        description="Medixusは、医療機関運営を再設計するための統合OSを開発しています。現場で機能する設計と、長期的な拡張性の両立を目指します。"
      />

      <section className="section-gap">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="panel rounded-2xl p-7">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink">医療機関運営を、OSから再設計する。</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              私たちは、予約や問診などの個別最適を超えて、患者接点・診療体験・継続フォローを一体で設計します。
              医療者が判断とケアに集中できる運営基盤を実装し、持続可能な医療インフラに貢献します。
            </p>
          </article>

          <div className="space-y-4">
            {companyValues.map((value) => (
              <article key={value.title} className="panel rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-edge/70">
        <div className="site-shell max-w-4xl">
          <h2 className="text-2xl font-semibold text-ink">会社概要</h2>
          <dl className="mt-6 divide-y divide-edge rounded-2xl border border-edge bg-white">
            {companyFacts.map((fact) => (
              <div key={fact.key} className="grid gap-2 px-5 py-4 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="text-sm font-medium text-slate">{fact.key}</dt>
                <dd className="text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
