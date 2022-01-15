import { createUnplugin } from 'unplugin'
import { Options } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default createUnplugin<Options>(_options => ({
  name: 'unplugin-sentry-upload',
}))
