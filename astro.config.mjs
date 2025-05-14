// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [vue()],
});
