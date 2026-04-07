"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7.5 10.5l2 2 4-4" />
      </svg>
    ),
    title: "オンライン診療",
    subtitle: "Online Consultation",
    description:
      "ビデオ通話での診察から処方箋の発行、薬の配送まで。自宅にいながら、対面と変わらないクオリティの診療を。24時間予約可能。",
    features: ["ビデオ診察", "AI問診サポート", "処方箋即時発行", "薬剤配送連携"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "医療事務自動化",
    subtitle: "Medical Office Automation",
    description:
      "受付・会計・レセプト・予約管理・書類作成——すべての事務作業をインテリジェントに自動化。ヒューマンエラーをゼロに。",
    features: ["受付・会計の完全自動化", "レセプト自動作成", "予約最適化AI", "書類の自動生成"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "患者データプラットフォーム",
    subtitle: "Patient Data Platform",
    description:
      "患者のカルテ・検査結果・処方履歴を一元管理。医師がリアルタイムで正確な情報にアクセスし、最適な治療判断を。",
    features: ["電子カルテ統合", "検査結果の即時共有", "処方履歴管理", "データ分析ダッシュボード"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: "セキュリティ＆コンプライアンス",
    subtitle: "Security & Compliance",
    description:
      "医療情報システムの安全管理ガイドラインに準拠。エンドツーエンドの暗号化と多層防御で、患者データを徹底保護。",
    features: ["エンドツーエンド暗号化", "多要素認証", "監査ログ", "ガイドライン準拠"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${visible ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
    >
      <div className="group relative h-full p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-1">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-primary/60 mb-4">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-6">{service.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary bg-primary/5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            テクノロジーで、医療を解放する。
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            医師と看護師が患者に向き合う時間を最大化するために、
            <br className="hidden sm:block" />
            それ以外のすべてを自動化する。
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
