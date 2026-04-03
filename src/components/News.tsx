import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { newsItems } from "@/lib/constants";

export function News() {
  return (
    <section id="news" className="section-shell bg-white py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading title="News" align="center" />

        <div className="mt-10 grid gap-4">
          {newsItems.map((item, index) => (
            <ScrollReveal key={`${item.date}-${item.title}`} delay={index * 0.1}>
              <article className="rounded-2xl border border-slate-200 bg-background p-5 shadow-soft md:p-6">
                <p className="font-en text-xs font-semibold tracking-[0.14em] text-accent">{item.date}</p>
                <h3 className="mt-2 text-base font-semibold text-primary md:text-lg">{item.title}</h3>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
