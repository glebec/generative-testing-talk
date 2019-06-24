import * as fc from 'fast-check'
import sort from './01-sort'

// Example of unit testing:

describe('`sort`', () => {
    it('transforms `[2, 1, 3]` to `[1, 2, 3]`', () => {
        expect(sort([2, 1, 3])).toEqual([1, 2, 3])
    })
})

// Example of manual / ad-hoc / implicit property testing:

const LIMIT_TESTS = 100
const LIMIT_LEN = 50
const LIMIT_NUM = 1000

function randomInt (limit = 1) : number {
    return Math.floor(Math.random() * limit)
}

function randomArr () : number[] {
    return Array.from(
        { length: randomInt(LIMIT_LEN) },
        () => randomInt(LIMIT_NUM)
    )
}

describe('`sort`', () => {
    it('outputs ordered arrays', () => {
        for (let t = 0; t < LIMIT_TESTS; t++) {
            expect(isOrdered(sort(randomArr()))).toBe(true)
        }
    })
})

// Example of true property testing using fast-check library:

function isOrdered (arr : number[]) : boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
    }
    return true
}

describe('`sort`', () => {
    it('outputs ordered arrays', () => {
        fc.assert(                              // run and throw on failure
            fc.property(                        // a "property" instance, which
                fc.array(fc.integer()),         // generates arrays of ints, &
                (nums) => isOrdered(sort(nums)) // feeds them to this predicate
            ),
            { seed: 1213330267, verbose: false } // use verbose to see shrinks
        )
    })
})
