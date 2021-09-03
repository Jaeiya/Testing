import { add, hello, subtract } from "../src/a";

describe('add()', () => {
  it('adds two numbers together', () => {
    expect(add(1, 2)).toBe(3)
  })
})

describe('subtract()', () => {
  it('subtracts two numbers', () => {
    expect(subtract(3, 5)).toBe(-2)
  })
})

describe('hello()', () => {
  it('returns a greeting', () => {
    expect(hello()).toBe('hello world');
  })
})