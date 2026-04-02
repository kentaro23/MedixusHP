import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medixus-hp.vercel.app"),
  title: {
    default: "Medixus | 医療機関運営の次世代OS",
    template: "%s | Medixus"
  },
  description:
    "Medixusは、予約・問診・患者コミュニケーション・継続フォロー・AIリスク判定を統合し、医療機関運営そのものを再設計する次世代医療OSです。",
  openGraph: {
    title: "Medixus | 医療機関運営の次世代OS",
    description:
      "点の効率化ではなく、医療機関運営をOSから再設計する。Medixusのプロダクトと構想を紹介します。",
    url: "https://medixus-hp.vercel.app",
    siteName: "Medixus",
    locale: "ja_JP",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${outfit.variable} ${noto.variable} bg-canvas text-ink antialiased`}>
        <div className="page-noise" aria-hidden />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
