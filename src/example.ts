export default function greeter (person: String): String {
    return 'Hello, ' + person
}

const user : String = 'Jane User'

console.log(greeter(user))
