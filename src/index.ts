import { NormalizedOutputOptions, OutputBundle, PluginContext } from 'rollup'
import { createUnplugin, UnpluginContextMeta, UnpluginFactory } from 'unplugin'
import SentryCliPlugin from '@sentry/webpack-plugin'
import { Compiler } from 'webpack'
import { Options } from './types'

export default createUnplugin<Options>(pluginFactory())

function pluginFactory<Options>(): UnpluginFactory<Options> {
  return (pluginOptions: Options | undefined, meta: UnpluginContextMeta) => {
    return {
      name: 'unplugin-sentry-upload',
      vite: {
        async writeBundle(this: PluginContext, viteOptions: NormalizedOutputOptions, bundle: OutputBundle): Promise<void> {
          // guard for watch mode and no sourcemap output
          if (!this.meta.watchMode && (!viteOptions.sourcemap === false)) 
            createRelease.call(this, pluginOptions, viteOptions, bundle, meta)
        },
      },
      webpack(compiler: Compiler) {
        const sentryWebpack = new SentryCliPlugin(pluginOptions as any)
        sentryWebpack.apply(compiler)
      },
    }
  }
}

async function createRelease<Options>(this: PluginContext, _pluginOptions: Options | undefined, _viteOptions: NormalizedOutputOptions, _bundle: OutputBundle, _meta: UnpluginContextMeta): Promise<void> {
  if (_pluginOptions === undefined) return
  this.warn(`${JSON.stringify(_pluginOptions)}`)
}
