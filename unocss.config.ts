import config from '@slidev/client/uno.config'
import { mergeConfigs, presetWebFonts } from 'unocss'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
        // This will download the fonts and serve them locally
        processors: createLocalFontProcessor({
        // Directory to cache the fonts
          cacheDir: 'node_modules/.cache/unocss/fonts',

          // Directory to save the fonts assets
          fontAssetsDir: 'public/assets/fonts',

          // Base URL to serve the fonts from the client
          fontServeBaseUrl: '/assets/fonts',
        }),
      }),
    ],
  },
])
