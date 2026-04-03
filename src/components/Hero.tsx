"use client";

import { motion } from "framer-motion";
import { AlertTriangle, PhoneCall } from "lucide-react";
import { heroFlowItems } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section id="top" className="section-shell relative overflow-hidden bg-hero-gradient pt-32 text-white md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-35" aria-hidden="true" />
      <HeartbeatBackground />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28">
        <ScrollReveal>
          <div>
            <p className="font-en mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Medical AI Platform</p>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">声で、命を守る。</h1>
            <h2 className="mt-6 text-balance text-lg font-medium leading-relaxed text-white/90 md:text-2xl">
              毎日の電話に答えるだけ。AIが声帯の微細な変化を捉え、
              遺伝子リスクと掛け合わせて心不全の再入院を「未然に」防ぐ。
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              デバイス不要。アプリ不要。北里大学との共同研究から生まれた、世界初※のApp-less医療AIプラットフォーム。
            </p>
            <p className="mt-1 text-xs text-white/60">※自社調べ</p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#technology"
                className="focus-ring inline-flex rounded-full bg-cta-gradient px-7 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.02]"
              >
                テクノロジーを見る
              </a>
              <a href="#contact" className="focus-ring rounded-md text-sm font-semibold text-white underline-offset-4 transition hover:underline">
                お問い合わせ →
              </a>
            </div>
          </div>
        </ScrollReveal>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
            <div className="dot-bg absolute inset-0 rounded-3xl opacity-20" aria-hidden="true" />

            <div className="relative grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <motion.div
                className="rounded-2xl border border-white/30 bg-white/10 p-4"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>着信中</span>
                  <PhoneCall className="h-4 w-4 text-secondary" />
                </div>
                <p className="mt-2 text-lg font-semibold">Medixus Call</p>
                <p className="mt-1 text-sm text-white/80">本日の体調についてお聞きします</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    className="h-full rounded-full bg-secondary"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "72%" }}
                    transition={{ duration: 1.2, delay: 0.45, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="hidden h-10 w-16 items-center justify-center md:flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.svg viewBox="0 0 80 30" className="w-16 text-secondary" fill="none">
                  <motion.path
                    d="M0 15 H22 L30 5 L42 25 L52 15 H80"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-white/30 bg-white/10 p-4"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.8 }}
              >
                <p className="text-xs text-white/70">AI分析結果</p>
                <div className="mt-2 space-y-2">
                  <motion.div
                    className="rounded-xl border border-secondary/60 bg-secondary/15 px-3 py-2 text-sm"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 1.0 }}
                  >
                    Normal: 安定状態
                  </motion.div>
                  <motion.div
                    className="rounded-xl border border-amber-300/60 bg-amber-200/20 px-3 py-2 text-sm text-amber-50"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 1.2 }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Alert: 異常兆候検知
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {heroFlowItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="rounded-2xl border border-white/30 bg-white/10 p-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 1 + index * 0.1 }}
                  >
                    <Icon className="h-5 w-5 text-secondary" />
                    <p className="mt-2 text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-white/80">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeartbeatBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
      <svg viewBox="0 0 1440 540" className="h-full w-full">
        <motion.path
          d="M0 275 H220 L270 190 L335 360 L410 230 H560 L620 300 L700 150 L790 350 L900 260 H1080 L1140 230 L1230 310 L1310 245 H1440"
          fill="none"
          stroke="rgba(0,212,170,0.7)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="14 16"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ repeat: Infinity, duration: 5.4, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
