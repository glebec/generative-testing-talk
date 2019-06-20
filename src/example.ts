export default function greeter (person: string): string {
    return 'Hello, ' + person
}

const user : string = 'Jane User'

console.log(greeter(user))
