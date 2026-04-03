import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonItems } from "@/lib/constants";

export function Comparison() {
  return (
    <section className="section-shell bg-white py-24 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          title="なぜ、Medixusだけが「これ」をできるのか。"
          align="center"
          description="ハード非依存・App-less・遺伝子統合の3点で、運用とスケールの制約を同時に解く。"
        />

        <ScrollReveal className="mt-12 hidden overflow-hidden rounded-2xl border border-slate-200 shadow-soft md:block">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse bg-white text-left text-sm">
              <caption className="sr-only">Medixusと他方式の比較表</caption>
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col" className="px-4 py-4 font-semibold">項目</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Medixus</th>
                  <th scope="col" className="px-4 py-4 font-semibold">A-wave（阪大発）</th>
                  <th scope="col" className="px-4 py-4 font-semibold">従来の遠隔モニタリング</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr key={item.label} className={index % 2 === 0 ? "bg-background" : "bg-white"}>
                    <th scope="row" className="px-4 py-4 font-semibold text-primary">{item.label}</th>
                    <td className="px-4 py-4 text-primary">{item.medixus}</td>
                    <td className="px-4 py-4 text-textSecondary">{item.awave}</td>
                    <td className="px-4 py-4 text-textSecondary">{item.legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:hidden">
          {comparisonItems.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-base font-bold text-primary">{item.label}</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-primary">Medixus</dt>
                    <dd className="text-primary/90">{item.medixus}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-textSecondary">A-wave</dt>
                    <dd className="text-textSecondary">{item.awave}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-textSecondary">従来方式</dt>
                    <dd className="text-textSecondary">{item.legacy}</dd>
                  </div>
                </dl>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mx-auto mt-10 max-w-5xl rounded-2xl border border-primary/15 bg-primary px-6 py-5 text-center text-white md:px-8" delay={0.2}>
          <p className="text-base font-semibold md:text-lg">
            ハードウェアに依存しないソフトウェア完結型だからこそ、限界費用ゼロで日本全国・海外にスケール可能。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
