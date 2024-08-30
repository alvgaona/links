import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://links.alvgaona.com",
  output: "static",
  adapter: vercel(),
  assets: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
