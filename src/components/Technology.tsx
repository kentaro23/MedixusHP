import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techBadges } from "@/lib/constants";

export function Technology() {
  return (
    <section id="technology" className="section-shell bg-background py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          title="「山の土砂崩れ」を予測するように、身体の危機を予測する。"
          align="center"
          description="遺伝子の固定リスクと、日々の声データを重ねて個別化予測を行う独自エンジン。"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <ScrollReveal className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-sky-100 p-8 shadow-soft" delay={0.1}>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Layer 1</p>
            <h3 className="mt-3 text-2xl font-bold text-primary">遺伝子リスク（PRS）</h3>
            <p className="mt-2 text-sm font-semibold text-blue-800">山の地形 — 一生変わらない、あなた固有のリスク地図</p>
            <p className="mt-4 text-sm leading-relaxed text-blue-900/80">
              ゲノムワイド関連解析（GWAS）から算出される多遺伝子リスクスコア。心不全・COPD等の疾患発症リスクを定量化。
            </p>
          </ScrollReveal>

          <ScrollReveal className="mx-auto hidden h-24 w-24 items-center justify-center rounded-full bg-cta-gradient text-white shadow-glow lg:flex" delay={0.25}>
            <div className="text-center">
              <p className="font-en text-xs uppercase">Fusion</p>
              <p className="text-sm font-bold">AI</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-100 p-8 shadow-soft" delay={0.2}>
            <p className="font-en text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Layer 2</p>
            <h3 className="mt-3 text-2xl font-bold text-primary">デジタルバイオマーカー</h3>
            <p className="mt-2 text-sm font-semibold text-emerald-800">今降っている雨 — 日々変化する、あなたの「今」の状態</p>
            <p className="mt-4 text-sm leading-relaxed text-emerald-900/80">
              Voice Biomarker（声帯浮腫み検知）、呼吸パターン、発話速度・リズムの変化をリアルタイム解析。
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mx-auto mt-8 max-w-4xl rounded-2xl bg-cta-gradient p-8 text-white shadow-glow" delay={0.3}>
          <h3 className="text-2xl font-bold">Medixus Risk Engine™</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">
            2つのデータレイヤーを統合し、個人に最適化されたリスクアラートを生成する独自AIモデル。
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <ScrollReveal key={badge.label} delay={index * 0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-primary shadow-soft">
                  <Icon className="h-5 w-5 text-secondary" />
                  <p className="mt-2 font-semibold">{badge.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
