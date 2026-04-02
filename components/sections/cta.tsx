import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section id="cta" className="pb-20 sm:pb-24">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[34px] border border-ink/10 bg-white p-8 shadow-panel sm:p-12">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_10%,rgba(79,111,255,0.16),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(86,214,255,0.16),transparent_36%)]"
              aria-hidden
            />

            <div className="relative max-w-3xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-azure/85">
                Build The Next Medical Standard
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                医療の流れそのものを変えるパートナーへ。
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                導入相談、共同検証、提携検討まで。Medixusは、医療機関運営の次の標準を共に設計します。
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:contact@medixus.jp"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                お問い合わせ
              </a>
              <a
                href="mailto:partner@medixus.jp"
                className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/35"
              >
                提携のご相談
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
