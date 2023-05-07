export type Glyph = string[]
export type GlyphOrJoin = Glyph | Glyph[]

export const lerp01 = (x: number, min: number, max: number) => {
  const d = max - min
  return min + x * d
}
export const lerp = (x: number, iMin: number, iMax: number, oMin: number, oMax: number) => {
  const floor = x - iMin
  const delta = iMax - iMin
  return lerp01(floor / delta, oMin, oMax)
}
export const join = (glyphA: Glyph, glyphB: Glyph): Glyph => {
  const r = glyphA.concat(glyphB)
  if (glyphA.filter((g) => g.startsWith('v')).length) {
    r.push('inv')
  }
  return r
}

const runFnOnGlyph = (gl: GlyphOrJoin): Glyph => {
  if (typeof gl[0] === 'string') {
    return gl as Glyph
  } else {
    return join(gl[0], gl[1] as Glyph)
  }
}
export const mergeGlyphs = (glyphs: GlyphOrJoin[]): Glyph[] => {
  const r: Glyph[] = []
  for (const g of glyphs) {
    r.push(runFnOnGlyph(g))
  }
  return r
}

export const flattenGlyphs = (glyphs: GlyphOrJoin[]): Glyph[] => {
  const r: Glyph[] = []
  for (const g of glyphs) {
    if (typeof g[0] === 'string') {
      r.push(g as Glyph)
    } else {
      r.push(g[0] as Glyph)
      r.push(g[1] as Glyph)
    }
  }
  return r
}

export const makeMapKey = (glyph: Glyph): string => {
  return glyph.join('')
}

export const getGlyphKeys=(glyphs:Glyph[]):string[]=>{
  return glyphs.map(makeMapKey)
}

export const phonetic = (keys: string[], map: Record<string, string>): string[] => {
  return keys.map((k) => map[k])
}
