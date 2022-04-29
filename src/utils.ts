import { resolve } from 'path'
import { ensurePrefix } from '@antfu/utils'

import type { ResolvedOptions } from './types'

export function getResolvedPath(file: string, resolvedOptions: ResolvedOptions) {
  return resolve(`${ensurePrefix('./', resolvedOptions.outDir)}/${file}`)
}
