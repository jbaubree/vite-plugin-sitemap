import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { dirname } from 'path'

import { TEST_FILES } from './variables'

export function generateTestFiles() {
  TEST_FILES.forEach((testFile) => {
    const folder = dirname(testFile)
    if (!existsSync(folder))
      mkdirSync(folder)
    writeFileSync(testFile, '')
  })
}
