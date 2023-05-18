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
  const namescopy = Object.assign({}, names)
  //https://en.wikipedia.org/wiki/Help:IPA/English#Key


  namescopy[makeMapKey(con.l)] = 'l'
  namescopy[makeMapKey(con.p)] = 'p'
  namescopy[makeMapKey(con.b)] = 'b'
  namescopy[makeMapKey(con.m)] = 'm'
  namescopy[makeMapKey(con.t)] = 't'
  namescopy[makeMapKey(con.d)] = 'd'
  namescopy[makeMapKey(con.j)] = 'j'
  namescopy[makeMapKey(con.r)] = 'r'
  namescopy[makeMapKey(con.h)] = 'h'
  namescopy[makeMapKey(con.s)] = 's'
  namescopy[makeMapKey(con.z)] = 'z'
  namescopy[makeMapKey(con.k)] = 'k'
  namescopy[makeMapKey(con.n)] = 'n'
  namescopy[makeMapKey(con.f)] = 'f'
  namescopy[makeMapKey(con.g)] = 'g'

  namescopy[makeMapKey(con.v)] = 'w'
  namescopy[makeMapKey(con.vh)] = 'v'
  namescopy[makeMapKey(con.tj)] = 't͡ʃ'
  namescopy[makeMapKey(con.dj)] = 'dʒ'
  namescopy[makeMapKey(con.tdh)] = 'ð'
  namescopy[makeMapKey(con.tfh)] = 'θ'
  namescopy[makeMapKey(con.sh)] = 'ʃ'
  namescopy[makeMapKey(con.ch)] = 'ʒ'
  namescopy[makeMapKey(con.ng)] = 'ŋ'

  // con.dj 	;//dew[4]
  //con.dʒ 	;//giant, badge
  // con.ð 	;//thy, breathe, father
  // con.hw 	//whine[5]
  // con.lj 	//lute[4]
  // con.nj 	//new[4]
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

  namescopy[makeMapKey(vow.oy)] = 'oy'
  namescopy[makeMapKey(vow.ow)] = 'ow'
  namescopy[makeMapKey(vow.eh)] = 'eh'
  namescopy[makeMapKey(vow.uh)] = 'uh'
  namescopy[makeMapKey(vow.air)] = 'air' // ɛə
  namescopy[makeMapKey(vow.ear)] = 'ear'
  namescopy[makeMapKey(vow.or)] = 'or'
  namescopy[makeMapKey(vow.er)] = 'er'

  namescopy[makeMapKey(vow.ah)] = 'æ'
  namescopy[makeMapKey(vow.ii)] = 'iː'
  namescopy[makeMapKey(vow.uu)] = 'ʊ'
  namescopy[makeMapKey(vow.ey)] = 'eɪ'
  namescopy[makeMapKey(vow.aj)] = 'aɪ'
  namescopy[makeMapKey(vow.ih)] = 'ɪ'
  namescopy[makeMapKey(vow.oh)] = 'ɒ'
  namescopy[makeMapKey(vow.ar)] = 'ær'
  namescopy[makeMapKey(vow.oo)] = 'uː'
  namescopy[makeMapKey(vow.ohw)] = 'o'

  return namescopy
}

export const ipa = makeIpa()
