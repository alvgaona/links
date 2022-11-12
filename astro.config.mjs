import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel()
});