"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pipelinePhases } from "@/lib/constants";

export function Pipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 35%"]
  });
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="pipeline" ref={sectionRef} className="section-shell bg-background py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading title="1つの「電話」から、あらゆる疾患へ。" align="center" />

        <div className="mt-12">
          <div className="h-2 w-full overflow-hidden rounded-full bg-primary/10">
            <motion.div className="h-full origin-left bg-cta-gradient" style={{ scaleX: progressScaleX }} />
          </div>

          <ScrollReveal className="mt-8">
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-[920px] gap-5">
                {pipelinePhases.map((phase, index) => (
                  <article
                    key={phase.phase}
                    className="relative w-[260px] flex-shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
                  >
                    <span className="font-en text-xs font-semibold uppercase text-accent">{phase.phase}</span>
                    <p className="mt-1 text-sm font-semibold text-primary">{phase.period}</p>
                    <p className="mt-3 inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {phase.status}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-primary">{phase.disease}</p>
                    <p className="mt-2 text-sm text-textSecondary">{phase.marker}</p>
                    <p className="mt-4 text-sm font-bold text-primary">{phase.tam}</p>
                    {index < pipelinePhases.length - 1 ? (
                      <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-primary/30 lg:block" aria-hidden="true" />
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 rounded-2xl border border-primary/15 bg-white p-6 text-sm leading-relaxed text-textSecondary" delay={0.2}>
          AIモデルの差し替えだけで疾患を横展開できる"プラットフォーム"設計。電話（マイク）という共通インターフェースが、無限のパイプラインを可能にします。
        </ScrollReveal>
      </div>
    </section>
  );
}
