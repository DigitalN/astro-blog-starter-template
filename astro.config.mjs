import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Cloudflare Workers adapter
  adapter: cloudflare(),

  // Other plugins / integrations
  integrations: [tailwind()]
});
