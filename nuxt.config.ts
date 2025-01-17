// nuxt.config.js
export default defineNuxtConfig({
  // Set compatibility date to ensure compatibility with Nuxt releases
  compatibilityDate: '2024-11-01',

  // Enable Nuxt DevTools for debugging during development
  devtools: { enabled: true },

  // Link to your custom CSS file
  css: ['@/assets/css/style.css'],

  // Configure PostCSS plugins
  postcss: {
    plugins: {
      tailwindcss: {}, // Enables Tailwind CSS
      autoprefixer: {}, // Automatically adds vendor prefixes
    },
  },

  // Add external resources (Font Awesome CDN)
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
