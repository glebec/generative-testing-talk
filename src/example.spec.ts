import * as fc from 'fast-check'
import greeter, { contains } from './example'

describe('`greeter`', () => {
    it('greets', () => {
        expect(greeter('you')).toBe('Hello, you')
    })
})

describe('`contains`', () => {
    it('checks containment', () => {
        fc.assert(fc.property(fc.string(), fc.string(), (s1, s2) => {
            return contains(s2, s1 + s2)
        }), { verbose: true, seed: -320780945 })
    })
})
