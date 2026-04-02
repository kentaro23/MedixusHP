import Link from "next/link";

const nav = [
  { label: "Medixusとは", href: "#about" },
  { label: "OS全体像", href: "#platform" },
  { label: "差別化", href: "#differentiation" },
  { label: "未来像", href: "#future" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/65 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-ink">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-azure to-cyan text-[11px] font-bold text-white">
            M
          </span>
          <span>Medixus</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#cta"
          className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-ink/25"
        >
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
