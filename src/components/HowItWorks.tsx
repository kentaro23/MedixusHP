"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepItems } from "@/lib/constants";

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"]
  });
  const mobilePath = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const desktopPath = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="solution" ref={sectionRef} className="section-shell bg-white py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          title="App-less。デバイスレス。テクノロジーの存在を感じさせない、医療AI。"
          description="患者体験を変えずに、医療現場の意思決定だけをアップデートする3ステップ。"
          align="center"
        />

        <div className="relative mt-14">
          <svg
            viewBox="0 0 50 700"
            className="absolute left-4 top-0 h-full w-6 md:hidden"
            aria-hidden="true"
          >
            <path d="M25 20 V680" stroke="rgba(10,37,64,0.15)" strokeWidth="5" strokeLinecap="round" fill="none" />
            <motion.path
              d="M25 20 V680"
              stroke="url(#mobileFlow)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: mobilePath }}
            />
            <defs>
              <linearGradient id="mobileFlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4AA" />
                <stop offset="100%" stopColor="#635BFF" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            viewBox="0 0 1200 160"
            className="absolute left-0 top-28 hidden h-16 w-full md:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M80 80 C300 80, 300 80, 520 80 C740 80, 740 80, 960 80" stroke="rgba(10,37,64,0.14)" strokeWidth="6" fill="none" strokeLinecap="round" />
            <motion.path
              d="M80 80 C300 80, 300 80, 520 80 C740 80, 740 80, 960 80"
              stroke="url(#desktopFlow)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: desktopPath }}
            />
            <defs>
              <linearGradient id="desktopFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00D4AA" />
                <stop offset="100%" stopColor="#635BFF" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {stepItems.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.title} delay={index * 0.1}>
                  <article className="relative ml-10 h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:ml-0 md:pt-12">
                    <div className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white md:left-1/2 md:top-0 md:-translate-x-1/2 md:-translate-y-1/2">
                      {index + 1}
                    </div>
                    <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-textSecondary">{step.description}</p>
                    <p className="mt-4 rounded-lg bg-background px-3 py-2 text-xs font-medium text-primary/80">ビジュアル: {step.visual}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
