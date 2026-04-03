import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medixus.co.jp"),
  title: "Medixus Inc. | 声で、命を守る。医療AIプラットフォーム",
  description:
    "毎日の電話に答えるだけ。AIが声帯の微細な変化を捉え、遺伝子リスクと掛け合わせて心不全の再入院を未然に防ぐ。デバイス不要・アプリ不要の、世界初App-less医療AIプラットフォーム。",
  openGraph: {
    title: "Medixus Inc. | 声で、命を守る。医療AIプラットフォーム",
    description:
      "毎日の電話に答えるだけ。AIが声帯の微細な変化を捉え、遺伝子リスクと掛け合わせて心不全の再入院を未然に防ぐ。",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Medixus OGP"
      }
    ],
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Medixus Inc. | 声で、命を守る。医療AIプラットフォーム",
    description: "デバイス不要・アプリ不要。電話だけで始まる医療AI。",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="bg-background text-textPrimary antialiased">{children}</body>
    </html>
  );
}
