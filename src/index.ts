import { NormalizedOutputOptions, OutputBundle, PluginContext, SourceMap } from 'rollup'
import { createUnplugin } from 'unplugin'
import * as SentryCli from '@sentry/cli'
import { Options } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default createUnplugin<Options>(_options => ({
  name: 'unplugin-sentry-upload',
  vite: {
    async writeBundle(this: PluginContext, _options: NormalizedOutputOptions, _bundle: OutputBundle): Promise<void> {
      // guard for watch mode and no sourcemap output
      if (!this.meta.watchMode && (!_options.sourcemap === false)) {
        for (const [thing, info] of Object.entries(_bundle)) {
          if (info.type === 'chunk') {
            //if (info.map) console.log(JSON.stringify(info.map))
            const cli = new SentryCli.default()
            const version = await cli.releases.proposeVersion()
            console.log(cli)
            console.log(version)
          }
        }
      }
    }
  },
}))
