// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-02',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Habilitar SSR (Renderizado en servidor) para mejor SEO/AEO
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Configuración de Tipografía Google Fonts
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700],
      Outfit: [300, 400, 500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  // Configuración de Procesamiento de Imágenes
  image: {
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Configuración del Sitio y Sitemap
  site: {
    url: 'https://geriatradelicias.com',
    name: 'Dra. Andrea Carolina Harsanyi | Geriatra en Delicias'
  },

  sitemap: {
    hostname: 'https://geriatradelicias.com'
  },

  // Configuración de Cabecera Global (SEO, GEO, AEO, LLMO)
  app: {
    head: {
      htmlAttrs: {
        lang: 'es-MX'
      },
      title: 'Dra. Andrea Carolina Harsanyi | Geriatra en Delicias Chihuahua',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Atención médica integral y empática para el adulto mayor en Delicias, Chihuahua. Consulta especializada en demencias, Alzheimer, osteoporosis, sarcopenia y envejecimiento saludable con la Dra. Andrea Carolina Harsanyi.'
        },
        // SEO Local & GEO (Posicionamiento en Delicias, Chihuahua)
        { name: 'geo.region', content: 'MX-CHH' },
        { name: 'geo.placename', content: 'Delicias' },
        { name: 'geo.position', content: '28.1933;-105.4711' },
        { name: 'ICBM', content: '28.1933, -105.4711' },

        // Open Graph / Facebook (Visualización Premium en Redes)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Dra. Andrea Carolina Harsanyi | Geriatra en Delicias, Chihuahua' },
        {
          property: 'og:description',
          content: 'Atención médica gerontológica de alta calidad. Especialista en demencia, prevención de caídas y salud holística en el adulto mayor.'
        },
        { property: 'og:url', content: 'https://geriatradelicias.com' },
        { property: 'og:image', content: 'https://geriatradelicias.com/images/social-share-cover.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Dra. Andrea Carolina Harsanyi | Geriatra en Delicias' },
        {
          name: 'twitter:description',
          content: 'Atención médica integral y empática para el adulto mayor en Delicias, Chihuahua.'
        },
        { name: 'twitter:image', content: 'https://geriatradelicias.com/images/social-share-cover.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://geriatradelicias.com' },
        // Preconexiones para mejorar el rendimiento
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ]
    }
  }
})
