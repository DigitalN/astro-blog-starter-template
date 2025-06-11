import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";   // ← add

export default defineConfig({
  integrations: [tailwind(), cloudflare()],
});
