import * as fc from 'fast-check'

// multiple arbitraries

describe("(one of) De Morgan's Laws", () => {
    test('not (P and Q) <=> (not P) or (not Q)', () => {
        fc.assert(fc.property(
            fc.boolean(), fc.boolean(),
            (p, q) => (!(p && q) === !p || !q)
        ))
    })
})

// combinators

describe('`Array#filter`', () => {
    it('always results in a same-length or shorter array', () => {
        fc.assert(fc.property(
            fc.array(fc.anything()), // array of mixed vals (any types)
            fc.func(fc.boolean()), // func returning (consistent) bools
            (arr, pred) => {
                return arr.filter(pred).length <= arr.length
            }
        ))
    })
})

// mapping

function isOdd (num) { return num % 2 === 1 } // deliberately broken… see how?

describe('`isOdd`', () => {
    it('correctly identifies odd integers', () => {
        fc.assert(fc.property(
            fc.integer().map(n => n * 2 + 1), // odd ints
            isOdd
        ))
    })
})
