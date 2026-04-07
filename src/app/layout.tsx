import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medixus | Healthcare, Redefined.",
  description:
    "医療DXの最前線。テクノロジーの力で、すべての人に最高の医療を届ける。",
  openGraph: {
    title: "Medixus | Healthcare, Redefined.",
    description:
      "医療DXの最前線。テクノロジーの力で、すべての人に最高の医療を届ける。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
