import { NormalizedOutputOptions, OutputBundle, PluginContext, SourceMap } from 'rollup'
import { createUnplugin } from 'unplugin'
import * as SentryCli from '@sentry/cli'
import { Options } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default createUnplugin<Options>(_pluginOptions => ({
  name: 'unplugin-sentry-upload',
  vite: {
    async writeBundle(this: PluginContext, _options: NormalizedOutputOptions, _bundle: OutputBundle): Promise<void> {
      // guard for watch mode and no sourcemap output
      if (!this.meta.watchMode && (!_options.sourcemap === false))
        finalizeRelease(_pluginOptions, _options, _bundle)
    },
  },
}))

function finalizeRelease(_pluginOptions: Options, _options: NormalizedOutputOptions, _bundle: OutputBundle) {
  for (const [_thing, info] of Object.entries(_bundle)) {
    if (info.type === 'chunk') {
      if (info.map)
        console.log(info.fileName)
        console.log(`${info.fileName}.map`)
    }
  }
}
