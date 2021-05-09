require("dotenv").config();

const APP_TITLE = "Q&A";

module.exports = {
  server: {
    host: "0.0.0.0" // Allow to connect other devices on the local network
  },
  // target: "static",
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    // Only headers common to all pages and all languages.
    // The others are defined in the layout component.
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
<<<<<<< Updated upstream
  plugins: [
  { src: '~/plugins/vue-good-table', ssr: true }
],
=======
  plugins: [{ src: "~/plugins/vue-good-table", ssr: true }, "~/plugins/disqus",
  { src: '~/plugins/vuex-persist', ssr: false }],

>>>>>>> Stashed changes
  /*
   ** Environment variables
   */
  env: {
    appTitle: APP_TITLE,
    appUrl: process.env.URL // main address of the website. Prodived by Netlify
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },


  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
    [
      // Doc: https://github.com/nuxt-community/fontawesome-module
      "@nuxtjs/fontawesome",
      { icons: { solid: ["faHeart", "faCopy", "faMoon", "faDesktop", "faRainbow"], regular: ["faSun"] } }
    ],
    [
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      "@nuxtjs/tailwindcss",
      {
        configPath: "../tailwind.config.js", // relative to the src folder
        cssPath: "@/assets/scss/tailwind.scss"
      }
    ],
    ["@nuxtjs/google-analytics", { id: process.env.GA_TRACKING_ID }],
    // Doc: https://github.com/nuxt-community/color-mode-module
    ["@nuxtjs/color-mode", { preference: "light" }],
    "@nuxtjs/pwa"
  ],
  purgeCSS: {
    whitelist: ["__nuxt", "__layout", "dark-mode"],
    whitelistPatterns: [/page-(enter|leave)/, /svg.*/, /fa.*/] // Keep Fontawesome classes
  },
  pwa: {
    manifest: {
      name: "Q&A",
      short_name: "Q&A"
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "en", iso: "en-US", name: "English" }

        ],
        defaultLocale: "en",
        baseUrl: process.env.URL,
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: require("./src/locales/en.json")

          }
        },
        // Activate the language detection only on deployments
        // Mostly to avoid headache with the e2e tests
        detectBrowserLanguage: !!process.env.NETLIFY
      }
    ]
  ],
  /*
   ** Change the source directory
   */
  srcDir: "src/",
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {}
  }
};
