// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

//https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Konfigurasi opsional seperti limit input pixels atau kualitas kompresi gambar
        limitInputPixels: false, // agar bisa memproses gambar besar
      },
    },
  },
  site: "https://tigrisfire.com/", // Tambahkan URL situs di sini
  integrations: [
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
  ],
  // Konfigurasi lain
});
