import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Align Dental Clinic",
    short_name: "Align Dental",
    description: "Modern dental care in Ahilyanagar by Dr. Aishwarya Mestry",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#1B3A5C",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
