// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/main.scss"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  experimental: { appManifest: false },
  routeRules: {
    "/": { prerender: true, noScripts: true },
  },
  vite: {
    build: { minify: "oxc", cssMinify: true },
  },
  nitro: { compressPublicAssets: true },
});
