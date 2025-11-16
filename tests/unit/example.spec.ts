import { expect } from 'chai'

// Minimal smoke test to validate test runner wiring without bundling the app
describe('smoke', () => {
  it('adds numbers correctly', () => {
    expect(1 + 1).to.equal(2)
  })
})
