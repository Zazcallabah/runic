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

const makeIpa = (): Record<string, string> => {
  const namescopy = Object.assign({},names)
  //https://en.wikipedia.org/wiki/Help:IPA/English#Key

  namescopy[makeMapKey(con.dj)] = "dʒ"
  namescopy[makeMapKey(con.tdh)] = "ð"
  namescopy[makeMapKey(con.tfh)] = "θ"
  namescopy[makeMapKey(con.sh)] = "ʃ"
  namescopy[makeMapKey(con.ing)] = "ŋ"
  // tj dj vuh ing sh tdh tfh
 // con.dj 	;//dew[4]
  //con.dʒ 	;//giant, badge
 // con.ð 	;//thy, breathe, father
 // con.hw 	//whine[5]
 // con.lj 	//lute[4]
 // con.nj 	//new[4]
 // con.ŋ 	//sang, sink, singer
//  con.sj 	//consume[4]
 // con.ʃ 	//shy, cash, emotion
//  con.tj 	//tune[4]
 // con.tʃ 	//China, catch
//  con.θ 	//thigh, path
//  con.θj 	//enthuse[4]
//  con.v 	//vie, leave
//  con.w 	//wine, swine
//  con.z 	//zoo, has
 // con.zj 	//Zeus[4]
 // con.ʒ 	//pleasure, beige[9]


//, ey, ay, oy, ow, oh, ah, uhl, eh, ih, oo, ohw
//ar, uh, i, air, ear, or, er,
namescopy[makeMapKey(vow.ar)] = "ær"

  return namescopy
}

export const ipa = makeIpa()
