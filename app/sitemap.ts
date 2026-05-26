import type { MetadataRoute } from "next";
import { navLinks, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${site.baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date("2026-05-25"),
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.8
  }));
}
