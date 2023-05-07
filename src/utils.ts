export const lerp01 = (x: number, min: number, max: number) => {
  const d = max - min
  return min + x * d
}
export const lerp = (x: number, iMin: number, iMax: number, oMin: number, oMax: number) => {
  const floor = x - iMin
  const delta = iMax - iMin
  return lerp01(floor / delta, oMin, oMax)
}
export const join = (glyphA:string[],glyphB:string[])=>{
  const r = glyphA.concat(glyphB)
  if( glyphA.filter((g)=>g.startsWith("v")).length ){
    r.push("inv")
  }
  return r
}