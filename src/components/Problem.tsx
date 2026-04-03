import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { problemCards } from "@/lib/constants";

export function Problem() {
  return (
    <section id="problem" className="section-shell bg-background py-24 md:py-28">
      <div className="dot-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading title="日本の医療が直面する、3つの構造的課題" align="center" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problemCards.map((card, index) => (
            <ScrollReveal key={card.label} delay={index * 0.1}>
              <GlassCard className="h-full border border-white/70">
                <p className="text-4xl font-bold text-primary md:text-5xl">
                  <AnimatedCounter value={card.value} decimals={card.decimals} suffix={card.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold text-primary/80">{card.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-textSecondary">{card.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mx-auto mt-12 max-w-4xl text-center" delay={0.35}>
          <p className="text-lg font-semibold text-primary md:text-xl">
            Medixus は、"声"という最もシンプルなインターフェースで、この課題を解決します。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
