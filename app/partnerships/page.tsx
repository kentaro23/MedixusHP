import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-intro";
import { partnerSteps, partnerTracks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "導入・提携",
  description: "医療機関への導入や共同検証、プロダクト連携の進め方をご案内します。"
};

export default function PartnershipsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Partnership"
        title="導入・提携のご相談"
        description="現場の運用課題に合わせて、段階的な導入と検証を設計します。医療機関、医療法人、事業者との協業を広く受け付けています。"
      />

      <section className="section-gap">
        <div className="site-shell grid gap-4 md:grid-cols-3">
          {partnerTracks.map((track) => (
            <article key={track.title} className="panel rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-ink">{track.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap border-y border-edge/70 bg-white/70">
        <div className="site-shell">
          <h2 className="text-2xl font-semibold text-ink">導入の進め方</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {partnerSteps.map((step) => (
              <article key={step.title} className="panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{step.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            相談を開始する
          </Link>
        </div>
      </section>
    </main>
  );
}
