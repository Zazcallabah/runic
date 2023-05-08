import { describe, it, expect } from 'vitest'
import { ipa,names } from '@/glyphs/phonetics'
import { b,dj } from "@/glyphs/consonants"
import { makeMapKey } from '@/utils'

describe('ipa', () => {
  it('has same key for b', () => {
    const key = makeMapKey(b)
    expect(ipa[key]).toBe("b")
    expect(names[key]).toBe("b")
  })
  it('has different key for dj', () => {
    const key = makeMapKey(dj)
    expect(ipa[key]).toBe("dʒ")
    expect(names[key]).toBe("dj")
  })
  it("can have ipa names?",()=>{
    names.dʒ = "a";
  })
})
