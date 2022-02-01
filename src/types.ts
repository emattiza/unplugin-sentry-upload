import { Compilation } from 'webpack'
import SentryCliPlugin from '@sentry/webpack-plugin'

export interface IncludeOptions {
  paths: Array<string>
  ignoreFile?: string
  ignore?: string | Array<string>
  ext?: 'js' | 'map' | 'jsbundle' | 'bundle'
  urlPrefix?: string
  urlSuffix?: string
  stripPrefix?: Array<string>
  stripCommonPrefix?: boolean
  sourceMapReference?: boolean
  rewrite?: boolean
}

export interface SetCommitsAutoOptions {
  auto: true
  ignoreMissing?: boolean
  repo?: string
  commit?: string
}

export interface SetCommitsManualOptions {
  auto?: false
  repo: string
  commit: string
}

export type SetCommitsOptions = SetCommitsAutoOptions | SetCommitsManualOptions

export interface DeployOptions {
  env: string
  started?: number
  finished?: number
  time?: number
  name?: string
  url?: string
}

export type Options = {
  // define your plugin options here
  include: string | Array<string> | IncludeOptions
  org?: string
  project?: string
  authToken?: string
  url?: string
  customHeader?: string
  vcsRemote?: string
  release?: string
  dist?: string
  entries?: RegExp | any[] | ((key: string) => boolean)
  ignoreFile?: string
  ignore?: string | Array<string>
  configFile?: string
  ext?: Array<string>
  urlPrefix?: string
  urlSuffix?: string
  validate?: boolean
  stripPrefix?: Array<string>
  stripCommonPrefix?: boolean
  sourceMapReference?: boolean
  rewrite?: boolean
  finalize?: boolean
  dryRun?: boolean
  debug?: boolean
  silent?: boolean
  cleanArtifacts?: boolean
  errorHandler?: ((err: Error, invokeErr: (() => void), compilation: Compilation) => void)
  setCommits?: SetCommitsOptions
  deploy?: DeployOptions
} | SentryCliPlugin.SentryCliPluginOptions
