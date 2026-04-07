"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    year: "2025",
    title: "Medixus 創業",
    description: "「すべての人に最高の医療を」を掲げ、創業。",
  },
  {
    year: "2025",
    title: "オンライン診療β版リリース",
    description: "ビデオ診察と処方箋発行の統合プラットフォームを公開。",
  },
  {
    year: "2026",
    title: "医療事務自動化エンジン始動",
    description: "受付・会計・レセプト処理の完全自動化を実現。",
  },
  {
    year: "Future",
    title: "医療の完全DX化",
    description: "医師と看護師以外のすべてを自動化した医療体験を全国へ。",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <div
            className={`opacity-0 ${visible ? "animate-slide-in-left" : ""}`}
            style={{ animationFillMode: "forwards" }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              なぜ、Medixusなのか。
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                日本の医療は世界最高水準の技術を誇りながら、膨大な事務作業、非効率なプロセス、地域格差によって、その真価が発揮されていない——私たちはそう考えました。
              </p>
              <p>
                Medixusは「医師と看護師以外のすべてを自動化する」という大胆なミッションのもと、医療DXの最前線で挑戦を続けています。
              </p>
              <p>
                オンライン診療、事務の完全自動化、データ駆動の医療支援。テクノロジーを黒子として活用し、医療従事者が本来の使命——「人に向き合うこと」——に集中できる世界を創ります。
              </p>
            </div>

            {/* Key numbers */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "2025", label: "設立年" },
                { value: "100%", label: "事務自動化率目標" },
                { value: "全国", label: "対応エリア目標" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div
            className={`opacity-0 ${visible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="relative pl-8 border-l-2 border-border">
              {timeline.map((item, i) => (
                <div key={i} className="relative mb-10 last:mb-0">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[calc(0.5rem+1px)] top-1 w-4 h-4 rounded-full border-2 ${
                      item.year === "Future"
                        ? "border-accent bg-accent/20"
                        : "border-primary bg-primary/20"
                    }`}
                  />
                  {/* Year */}
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest mb-1 ${
                      item.year === "Future" ? "text-accent" : "text-primary"
                    }`}
                  >
                    {item.year}
                  </span>
                  {/* Content */}
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
