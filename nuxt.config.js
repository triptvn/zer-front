import webpack from 'webpack';
import { getRoutes } from './routes';
import theme from './themeConfig';

export default {
  server: {
    port: 3001,
    host: 'localhost'
  },
  head: {
    title: 'Zer - Thiết bị công nghệ của thế hệ Z',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#fff' },
  plugins: [],
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@vue-storefront/nuxt',
      {
        useRawSource: {
          dev: ['@vue-storefront/vendure', '@vue-storefront/core'],
          prod: ['@vue-storefront/vendure', '@vue-storefront/core']
        }
      }
    ],
    // @core-development-only-start
    [
      '@vue-storefront/nuxt-theme',
      {
        routes: false
      }
    ],
    // @core-development-only-end
    /* project-only-start
    ['@vue-storefront/nuxt-theme'],
    project-only-end */
    ['@vue-storefront/vendure/nuxt', {
      i18n: { useNuxtI18nConfig: true }
    }]
  ],
  modules: [
    ['nuxt-i18n', {
      baseUrl: process.env.BASE_URL || 'https://api.zer.vn'
    }],
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@vue-storefront/middleware/nuxt'
  ],
  i18n: {
    currency: 'VND',
    country: 'VN',
    countries: [
      { name: 'VN', label: 'Vietnam' }
    ],
    currencies: [
      { name: 'VND', label: 'Đồng' }
    ],
    locales: [
      { code: 'vi', label: 'Tiếng Việt', file: 'vi.js', iso: 'vi' }
    ],
    defaultLocale: 'vi',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'vi',
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'VND',
            currencyDisplay: 'symbol'
          }
        },
        vi: {
          currency: {
            style: 'currency',
            currency: 'VND',
            currencyDisplay: 'symbol'
          }
        }
      }
    }
  },
  styleResources: {
    scss: [
      require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
        paths: [process.cwd()]
      })
    ]
  },
  router: {
    extendRoutes(routes) {
      getRoutes(`${__dirname}`)
        .forEach((route) => routes.unshift(route));
    },
    middleware: ['checkout'],
  },
  publicRuntimeConfig: {
    theme
  },
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || ''
        })
      })
    ],
  },
  pwa: {
    meta: {
      theme_color: '#5ECE7B'
    }
  },
  googleFonts: {
    families: {
      Neogrotesk: {
        wght: [300, 400, 500, 600, 700],
        ital: [400]
      },
      Roboto: {
        wght: [300, 400, 500, 700],
        ital: [300, 400]
      }
    },
    display: 'swap'
  }
};
