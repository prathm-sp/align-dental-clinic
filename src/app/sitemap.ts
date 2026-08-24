import { siteConfig } from "@/lib/site-config";
import { getAllServiceIds } from "@/lib/services";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = ["", "/about", "/services", "/gallery", "/contact"];
  const serviceRoutes = getAllServiceIds().map((id) => `/services/${id}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.7 : 0.8,
  }));
}
