import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Medixusの個人情報保護方針。"
};

const sections = [
  {
    title: "1. 基本方針",
    body: "Medixus株式会社（以下「当社」）は、個人情報の保護が事業活動の基盤であることを認識し、関連法令等を遵守のうえ、適切な取得・利用・管理を行います。"
  },
  {
    title: "2. 取得する情報",
    body: "お問い合わせ時に提供される氏名、所属、連絡先、相談内容等の情報を取得する場合があります。"
  },
  {
    title: "3. 利用目的",
    body: "取得した情報は、お問い合わせ対応、サービス提供・改善、重要なお知らせの通知、採用選考に関する連絡のために利用します。"
  },
  {
    title: "4. 第三者提供",
    body: "法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供しません。"
  },
  {
    title: "5. 安全管理",
    body: "不正アクセス、漏えい、改ざん、紛失を防止するため、技術的・組織的な安全管理措置を講じます。"
  },
  {
    title: "6. 開示・訂正・削除等",
    body: "本人からの開示、訂正、利用停止、削除等の請求には、法令に従い適切に対応します。"
  },
  {
    title: "7. お問い合わせ窓口",
    body: "本ポリシーに関するお問い合わせは、contact@medixus.jp までご連絡ください。"
  }
];

export default function PrivacyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Legal"
        title="プライバシーポリシー"
        description="当社における個人情報の取り扱いについて、以下の通り定めます。"
      />

      <section className="section-gap">
        <div className="site-shell max-w-4xl space-y-4">
          {sections.map((section) => (
            <article key={section.title} className="panel rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{section.body}</p>
            </article>
          ))}
          <p className="pt-3 text-xs text-slate">制定日: 2026年4月2日</p>
        </div>
      </section>
    </main>
  );
}
