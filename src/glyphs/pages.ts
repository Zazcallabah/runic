import { ii, ih, eh, ey, uh, uhl, ear, ah, oh, ar, or, oo, ohw, er, ow, air, aj } from '@/glyphs/vowels'
import { sh, l, h, d, b, v, g, s, j, k, t, r, z, n, p, dj, tj, tdh, tfh, vuh, m, f
} from '@/glyphs/consonants'
import type { GlyphOrJoin } from '@/utils'

export const page12: Record<string, GlyphOrJoin[]> = {
  controls: [[k, uh], n, t, [r, ohw], l, z],
  shield: [[sh, ii], l, d],
  potion: [[p, ohw], [sh, uh], n],
  use: [[j, oo], z],
  item: [[aj, t],[eh, m]],
  roll: [[r, ohw], l],
  run: [[r, uh], n],
  talk: [[t, oh], k],
  focus: [[f, ohw], [k, uh], s],
  is: [[ih,z]],
  crucial: [k,[r,oo],[sh,uhl],l],
  inventory: [[ih,n],[vuh,eh],n,[t,or],ii],
  gear: [[g,ear]],
  move: [[m, oo], vuh]
}
export const page49: Record<string, GlyphOrJoin[]> = {
  the:[[tdh,uh]],
  golden: [[g, ohw], l, [d, ih], n],
  path: [[p,ah],tfh],
  greatest:[g,[r,ey],[t,ih],s,t],
  spell:[s,[p,eh],l],
}
export const page51: Record<string, GlyphOrJoin[]> ={
  cards:[[k,ar],d,z],
  did: [[d,ih],d],
  you: [[j,oo]],
  retain: [[r,ii],[t,ey],n],
  letter: [[l,eh],[t,er]],
  from:[f,[r,uh],m],
  us:[[uh,s]],
  immerse:[[ih,m],[er,s]],
  it: [[ih,t]],
  in: [[ih,n]],
  water:[[v,oh],[t,er]],
  for:[[f,or]],
  to:[[t,oo]],
  see:[[s,ii]],
  a: [uh],
  secret: [[s,ii],k,[r,ih],t],
  message:[[m,eh],[s,ih],dj],
  parry: [[p,air],ii],
  time:[[t,aj],m],
}
export const page52: Record<string, GlyphOrJoin[]> = {
  maze: [[m, ey], z],
  le: [[l, eh]],
  ri: [[r, aj]],
  up: [[uh, p]],
  doh: [[d, ow]],
  no: [[n, ah]],
  sou: [[s, ow]],
  we: [[v, eh]],
  eas: [[ii, s]]
}
export const page54: Record<string, GlyphOrJoin[]> = {
  fox: [[f, oh], k, s],
  sword: [[s, or], d],
  find: [[f, aj], n, d],
  some: [[s, uh], m],
  rare: [[r, air]],
  golden: [[g, ohw], l, [d, uh], n],
  statues: [s, [t, ah], [tj, oo], z]
}
export const page55: Record<string, GlyphOrJoin[]> = {
  near: [[n,ear]],
  an: [[ah,n]],
  ancient: [[ey,n],[tj,ih],n,t],
  tomb: [[t,oo],m],

  plundered: [p,[l,uh],n,[d,er],d],
  for: [[f,or]],
  its: [[ih,t],s],
  blade: [b,[l,ey],d],

  lies:[[l,aj],z],
  a: [uh],
  special: [s,[p,eh],[sh,uhl],l],
  place: [p,[l,ey],s],

  under: [[uh,n],[d,er]],
  the: [[tdh,uh]],
  moon: [[m,oo],n],

  contemplate: [[k,oh],n,[t,eh],m,p,[l,ey],t],
  this:[[tdh,ih],s],
  prayer:[p,[r,ey],er],
}
// export const words: Record<string, GlyphOrJoin[]> = {
//     fox: [[f, oh], k, s],
//     shield: [[sh, ii], l, d],
//     sword: [[s, or], d],

//      up: [[uh,p]],
//      down: [[d,ow],n],
//      // left right

//      take:[[t,ey],k],
//      use:[[j,oo],z],
//      roll:[[r,ohw],l],
//      run:[[r,uh],n],
//      talk:[[t,oh],k],
//      focus:[[f,ohw],[k,uh],s],
//      move:[[m,oo],vuh],
//      item: [[aj,t],[eh,m]],

//      is: [[ih,z]],
//      the: [[tdh, uh]],
//      of: [[uh,vuh]],
//      its:[[ih,t],s],
//      to: [[t,oo]],

//      hi: [[h,aj]],
//      are: [ar],
//      you: [[j,oh]],
//      new: [[n,oh]],
//      lies: [[l,aj],z],
//      a: [uh],
//      special: [s,[p,eh],[sh,uhl],l],
//      place: [p,[l,ey],s],

//      stolen:[s,[t,ohw],[l,ih],n],
//      device:[[d,ii],[vuh,aj],s],


//     //  the:
//     //  altar
//     //  has no soul

//      // guy inventory crucial
//      far:[[f,ar]],
//      shore:[[sh,or]],
//      shadow:[[sh,ah],[d,ohw]],
//      oubliette:[[oo,b],[l,ii],[eh,t]],
//      maze: [[m,ey],z],
//      light:[[l,aj],t],
//      where:[[v,air]],
//      do:[[d,oo]],
//      hide:[[h,aj],d],
//      but:[[b,uh],t],
//      go: [[g,ohw]],
//      no: [[n,ohw]],
//      be:[[b,ii]],
//      at: [[ah,t]],
//      all:[[oh,l]],
//      that:[[tdh,ah],t],

//      begin:[[b,eh],[g,ih],n],

//      // under for here hear are enough left special when that
//      // found toy great  have width you page  praying
//      // nothing water wide brave use adjust sign strange
//      // ancient being yet  they was wisdom tool toy checkpoint
//      //  guard rare  so know not north war kindness certain
//      // by item right mere inventory south
//      // stolen device
//      // but there are som weird critters

//      // you are allowed

//     secret: [[s, ii], k, [r, ih], t],
//     legend: [[l, eh], [dj, eh], n, d],
//     softest: [[s, oh], f, [t, ih], s, t],
//     ruin: [[r, oo], [ih, n]],
//     rune: [[r, oo], n],
//     seeker: [[s, ii], [k, er]],
//     arrival:[uh,[r,aj],[vuh,uhl],l],
//     heir: [air],
//     runic: [[r,oo],n,[ih,k]],
// }
