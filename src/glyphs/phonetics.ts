import { makeMapKey } from '@/utils'
import * as con from './consonants'
import * as vow from './vowels'

const makeNames = (): Record<string, string> => {
  const r: Record<string, string> = {}
  for (const n in con) {
    const gl = con[n as keyof typeof con]
    const key: string = makeMapKey(gl)
    r[key] = n
  }
  for (const n in vow) {
    const gl = vow[n as keyof typeof vow]
    const key: string = makeMapKey(gl)
    r[key] = n
  }
  return r
}

export const names = makeNames()
