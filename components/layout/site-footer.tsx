import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge/80 py-10">
      <div className="site-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">Medixus</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate">
            医療機関運営を、予約前後までつながるOSへ。
            患者接点の統合・継続フォロー・AI判定を一体設計する。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-semibold text-ink">Product</p>
            <Link href="/platform" className="block text-slate hover:text-ink">
              プロダクト
            </Link>
            <Link href="/partnerships" className="block text-slate hover:text-ink">
              導入・提携
            </Link>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-ink">Company</p>
            <Link href="/company" className="block text-slate hover:text-ink">
              会社情報
            </Link>
            <Link href="/careers" className="block text-slate hover:text-ink">
              採用
            </Link>
            <Link href="/contact" className="block text-slate hover:text-ink">
              お問い合わせ
            </Link>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-ink">Legal</p>
            <Link href="/legal/privacy" className="block text-slate hover:text-ink">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>

      <div className="site-shell mt-8 border-t border-edge pt-4 text-xs text-slate">
        © {new Date().getFullYear()} Medixus, Inc. All rights reserved.
      </div>
    </footer>
  );
}
