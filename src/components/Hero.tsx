"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.add("animate-fade-in-up");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white bg-grid overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />

      {/* Floating medical icons */}
      <div className="absolute top-1/4 left-[10%] opacity-10 animate-float">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-[12%] opacity-10 animate-float animation-delay-400">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-[15%] opacity-10 animate-float animation-delay-600">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/5 border border-primary/10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-primary">
            医療DXの最前線へ
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          <span className="block text-foreground">Healthcare,</span>
          <span className="block gradient-text">Redefined.</span>
        </h1>

        {/* Sub copy */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-10">
          テクノロジーの力で、医療の常識を覆す。
          <br className="hidden sm:block" />
          すべての人が、どこにいても、最高の医療を受けられる未来を。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            サービスを見る
            <svg
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#vision"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-foreground border border-border rounded-full hover:bg-surface transition-colors"
          >
            私たちのビジョン
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "24/7", label: "オンライン対応" },
            { value: "DX", label: "医療自動化" },
            { value: "∞", label: "可能性" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-muted">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted/40 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
