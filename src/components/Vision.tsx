"use client";

import { useEffect, useRef, useState } from "react";

const vmv = [
  {
    tag: "Vision",
    title: "医療に、革命を。すべての人に、最高を。",
    titleEn: "Redefine Healthcare for Everyone.",
    description:
      "場所も、時間も、経済状況も——あらゆる障壁を取り払い、世界中のすべての人が最高水準の医療を受けられる未来を実現する。",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    gradient: "from-primary/10 to-primary/5",
    accent: "text-primary",
    border: "border-primary/20",
  },
  {
    tag: "Mission",
    title: "医師と看護師が、\"人\"に向き合える世界を創る。",
    titleEn: "Automate Everything — Except Empathy.",
    description:
      "受付、会計、書類、予約管理——医師と看護師以外の業務をテクノロジーで完全自動化。医療従事者が本来の使命、すなわち患者と向き合う時間に集中できる環境を構築する。",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    gradient: "from-accent/10 to-accent/5",
    accent: "text-accent",
    border: "border-accent/20",
  },
  {
    tag: "Value",
    title: "妥協なき挑戦で、医療の限界を超える。",
    titleEn: "Zero Compromise. Beyond Limits.",
    description:
      "Borderless Care——場所を超える。Human First——人が主役、テクノロジーは黒子。Relentless Quality——品質に妥協しない。この3つの価値観が、私たちのすべての意思決定の基盤。",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    gradient: "from-primary/10 to-accent/5",
    accent: "text-primary-dark",
    border: "border-primary/15",
  },
];

function VMVCard({
  item,
  index,
}: {
  item: (typeof vmv)[0];
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${visible ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
    >
      <div
        className={`relative h-full p-8 lg:p-10 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} hover:shadow-lg transition-shadow duration-300`}
      >
        {/* Tag */}
        <div className={`inline-flex items-center gap-2 mb-6`}>
          <span className={item.accent}>{item.icon}</span>
          <span
            className={`text-xs font-bold uppercase tracking-widest ${item.accent}`}
          >
            {item.tag}
          </span>
        </div>

        {/* Titles */}
        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-snug mb-2">
          {item.title}
        </h3>
        <p className={`text-sm font-medium ${item.accent} mb-4`}>
          {item.titleEn}
        </p>

        {/* Description */}
        <p className="text-base text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Our Philosophy
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Vision · Mission · Value
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {vmv.map((item, i) => (
            <VMVCard key={item.tag} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
