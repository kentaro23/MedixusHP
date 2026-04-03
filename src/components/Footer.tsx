import { Linkedin, NotebookPen, Twitter } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/constants";

function LogoMark() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M2 12h4l2-4 3 9 2-5h9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F2F5F8] py-12">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
          <div>
            <Link href="#top" className="focus-ring inline-flex items-center gap-2 rounded-md text-primary" aria-label="Medixus ホームへ移動">
              <LogoMark />
              <span className="font-en text-xl font-bold">Medixus</span>
            </Link>
            <p className="mt-3 text-sm text-textSecondary">© 2026 Medixus Inc. All rights reserved.</p>
          </div>

          <nav aria-label="フッターサイトマップ" className="grid grid-cols-2 gap-2 text-sm text-primary md:grid-cols-3">
            {navItems.map((item) => (
              <a key={item.href} href={`#${item.href}`} className="focus-ring rounded-md px-1 py-1 hover:underline">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-primary">
            <a href="#" aria-label="X" className="focus-ring rounded-full bg-white p-2 shadow-soft transition hover:-translate-y-0.5">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="focus-ring rounded-full bg-white p-2 shadow-soft transition hover:-translate-y-0.5">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="note" className="focus-ring rounded-full bg-white p-2 shadow-soft transition hover:-translate-y-0.5">
              <NotebookPen className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/10 pt-5 text-sm text-textSecondary">
          Medixus Inc. | 東京都町田市 | info@medixus.co.jp（仮）
        </div>
      </div>
    </footer>
  );
}
