import type { Metadata } from "next";
import { Noto_Sans_JP, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
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
  title: "Medixus | 医療機関運営の次世代OS",
  description:
    "Medixusは、予約からフォローアップ、AI重症化予測までを統合し、医療機関運営そのものを再設計する次世代医療OSです。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${sora.variable} ${noto.variable} bg-base text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
