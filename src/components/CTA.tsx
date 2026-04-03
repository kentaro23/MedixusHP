import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section id="contact" className="section-shell bg-cta-gradient py-24 text-white md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 text-center md:px-10">
        <ScrollReveal>
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">声で、未来の医療をつくる仲間を探しています。</h2>
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-white/90 md:text-lg">
            医療機関・健保組合のご担当者様、共同研究にご興味のある研究者の方、投資家の皆様、エンジニア採用に関するお問い合わせ。
          </p>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/15 p-5 text-left backdrop-blur md:p-6">
            <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1 block font-medium">お名前</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="focus-ring w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2 text-textPrimary"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium">メールアドレス</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="focus-ring w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2 text-textPrimary"
                />
              </label>
              <label className="text-sm md:col-span-2">
                <span className="mb-1 block font-medium">お問い合わせ区分</span>
                <select name="category" className="focus-ring w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2 text-textPrimary">
                  <option>医療機関連携</option>
                  <option>共同研究</option>
                  <option>投資家向け</option>
                  <option>採用</option>
                  <option>その他</option>
                </select>
              </label>
              <label className="text-sm md:col-span-2">
                <span className="mb-1 block font-medium">お問い合わせ内容</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="focus-ring w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2 text-textPrimary"
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="focus-ring inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition hover:scale-[1.02]"
                >
                  お問い合わせ →
                </button>
                <p className="mt-3 text-xs text-white/85">Formspree連携用プレースホルダーです。`your-form-id` を本番IDに差し替えてご利用ください。</p>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
