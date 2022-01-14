import { createUnplugin } from 'unplugin'
import { Options } from './types'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-sentry-upload',
  transformInclude(id) {
    return id.endsWith('main.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`)
  },
}))
