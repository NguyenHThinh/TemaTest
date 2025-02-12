// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "src/",
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-swiper",
  ],

  // i18n config
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
        flag: "/images/flag_en.png",
      },
      {
        code: "vi",
        name: "Việt Nam",
        iso: "vi-VN",
        file: "vi.json",
        flag: "/images/flag_vi.png",
      },
    ],
    defaultLocale: "vi",
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    restructureDir: "src/i18n/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // swiper config
  swiper: {
    bundled: true,
    enableComposables: true,
  },
});
