import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "導入相談、提携、採用に関するお問い合わせ窓口。"
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="導入・提携・採用のご相談"
        description="目的と体制に合わせて、最適な進め方をご案内します。内容を確認後、担当よりご連絡します。"
      />

      <section className="section-gap">
        <div className="site-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="panel rounded-3xl p-7">
            <h2 className="text-2xl font-semibold text-ink">お問い合わせ先</h2>
            <div className="mt-6 space-y-4 text-sm text-slate">
              <p>
                導入相談: <a className="text-ink underline decoration-edge" href="mailto:contact@medixus.jp">contact@medixus.jp</a>
              </p>
              <p>
                提携相談: <a className="text-ink underline decoration-edge" href="mailto:partner@medixus.jp">partner@medixus.jp</a>
              </p>
              <p>
                採用: <a className="text-ink underline decoration-edge" href="mailto:careers@medixus.jp">careers@medixus.jp</a>
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-slate">
              通常3営業日以内に返信します。内容によっては追加情報をお願いする場合があります。
            </p>
          </article>

          <article className="panel rounded-3xl p-7">
            <h2 className="text-2xl font-semibold text-ink">ご連絡時の推奨情報</h2>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate">
              <li>ご所属（医療機関名 / 企業名）</li>
              <li>ご相談内容（導入・提携・採用 など）</li>
              <li>現状の課題と導入検討範囲</li>
              <li>ご希望の時期</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
