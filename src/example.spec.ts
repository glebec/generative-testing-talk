import greeter from './example'

describe('greeter', () => {
    it('greets', () => {
        expect(greeter('you')).toBe('Hello, you')
    })
})
