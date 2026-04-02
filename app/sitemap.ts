import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://medixus-hp.vercel.app";
  const now = new Date();

  return [
    "",
    "/platform",
    "/company",
    "/partnerships",
    "/careers",
    "/contact",
    "/legal/privacy"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}
