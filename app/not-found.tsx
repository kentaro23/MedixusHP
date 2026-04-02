import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-gap">
      <div className="site-shell panel max-w-2xl rounded-3xl p-8 text-center sm:p-12">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-5 text-3xl font-semibold text-ink">ページが見つかりませんでした。</h1>
        <p className="mt-4 text-sm text-slate">
          URLが変更されたか、削除された可能性があります。トップページからご確認ください。
        </p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}
