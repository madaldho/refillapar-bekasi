// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

//https://astro.build/config
export default defineConfig({
  site: "https://rumahapi.tigrisfire.com/", // Tambahkan URL situs di sini
  integrations: [
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
  ],
  // Konfigurasi lain
});
