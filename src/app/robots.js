import { WEBSITE_URL } from "@/lib/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
