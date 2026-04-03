"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessLayers } from "@/lib/constants";

export function BusinessModel() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-shell bg-white py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading title="段階的に収益を拡大する、4層構造。" align="center" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="space-y-3">
            {businessLayers.map((layer, index) => {
              const isActive = active === index;
              const Icon = layer.icon;

              return (
                <button
                  key={layer.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`focus-ring flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-soft"
                      : "border-slate-200 bg-white text-primary hover:border-primary/40"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-semibold">{layer.title}</span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-background p-6 shadow-soft md:p-8">
            {businessLayers.map((layer, index) => {
              if (index !== active) {
                return null;
              }

              const Icon = layer.icon;

              return (
                <motion.article
                  key={layer.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="inline-flex rounded-xl bg-cta-gradient p-3 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-primary">{layer.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-textSecondary">{layer.detail}</p>
                  <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-primary">{layer.customer}</p>
                  <p className="mt-4 text-sm leading-relaxed text-textSecondary">{layer.feature}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
