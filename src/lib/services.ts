import { siteConfig, type Service } from "./site-config";

export function getServiceById(id: string): Service | undefined {
  return siteConfig.services.find((service) => service.id === id);
}

export function getAllServiceIds(): string[] {
  return siteConfig.services.map((service) => service.id);
}
