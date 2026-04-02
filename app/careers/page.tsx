import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { positions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "採用",
  description: "Medixusの採用情報と募集ポジション。"
};

export default function CareersPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Careers"
        title="次世代医療インフラを、現場と一緒に実装する。"
        description="医療体験を変えるには、デザイン・エンジニアリング・運用設計が同じ解像度でつながる必要があります。Medixusはそのチームをつくっています。"
      />

      <section className="section-gap">
        <div className="site-shell grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="panel rounded-2xl p-7">
            <h2 className="text-2xl font-semibold text-ink">働き方</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              少人数チームで、企画・設計・実装・検証を高速に回します。機能開発だけでなく、現場運用まで見据えた意思決定を重視します。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              医療領域の責任を踏まえ、スピードと品質を両立できるプロダクト開発を行います。
            </p>
          </article>

          <div className="space-y-3">
            {positions.map((position) => (
              <article key={position.role} className="panel rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-ink">{position.role}</h3>
                <p className="mt-2 text-sm text-slate">{position.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-edge/70">
        <div className="site-shell panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-ink">応募・カジュアル面談</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            まずはカジュアル面談から可能です。職種、強み、関心領域を添えてご連絡ください。
          </p>
          <Link href="mailto:careers@medixus.jp" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
            careers@medixus.jp
          </Link>
        </div>
      </section>
    </main>
  );
}
