import Link from "next/link";

const navItems = [
  { href: "/platform", label: "プロダクト" },
  { href: "/partnerships", label: "導入・提携" },
  { href: "/company", label: "会社情報" },
  { href: "/careers", label: "採用" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge/70 bg-canvas/90 backdrop-blur-xl">
      <div className="site-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-ink">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan text-[11px] font-bold text-white">
            M
          </span>
          Medixus
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-ink/35"
          >
            お問い合わせ
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none rounded-full border border-ink/15 bg-white px-3 py-1.5 text-xs font-semibold text-ink">
            Menu
          </summary>
          <div className="panel absolute right-0 top-11 w-44 rounded-2xl p-3">
            <div className="flex flex-col gap-2 text-sm text-ink">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-2 py-1 hover:bg-ink/5">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="rounded-lg bg-ink px-3 py-1.5 text-center text-white">
                お問い合わせ
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
