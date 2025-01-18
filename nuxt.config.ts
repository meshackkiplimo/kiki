// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Enable Nuxt DevTools for debugging during development
  devtools: { enabled: true },

  // Link to your custom CSS file
  css: ['@/assets/css/style.css'],

  // Configure PostCSS plugins
  postcss: {
    plugins: {
      tailwindcss: {}, 
      autoprefixer: {}, 
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:9000/api',
    },
  },

  
 app:{head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
    ],
  },
}
});
