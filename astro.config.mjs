import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from "@astrojs/vercel/static";


// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  experimental: {
    assets: true
  }
});
