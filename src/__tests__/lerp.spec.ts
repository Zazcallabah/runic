import { describe, it, expect } from 'vitest'
import { lerp, lerp01 } from '@/utils'

describe('lerp01', () => {
  it('can calc 0', () => {
    expect(lerp01(0, 0, 1)).toBe(0)
  })
  it('can calc -7', () => {
    expect(lerp01(0.75, 0, -10)).toBe(-7.5)
  })
})

describe('lerp', () => {
  it('can calc 0', () => {
    expect(lerp(0, 0, 1, 0, 1)).toBe(0)
  })
  it('can calc 1 to 10', () => {
    expect(lerp(1, 0, 1, 0, 10)).toBe(10)
  })
  it('can calc var input to 10', () => {
    expect(lerp(1, 0, 4, 0, 10)).toBe(2.5)
  })
  it('can calc offset base', () => {
    expect(lerp(12, 10, 20, 100, 50)).toBe(90)
  })
})
