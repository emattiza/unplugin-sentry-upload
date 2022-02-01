import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import sentryPluginUpload from '../src/vite'

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    Inspect(),
    sentryPluginUpload({ include: 'dist/assets/', setCommits: { auto: true } }),
  ],
})
