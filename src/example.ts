export default function greeter (person: string): string {
    return 'Hello, ' + person
}

export function contains (pattern: string, text: string): boolean {
    // return text.substr(1).indexOf(pattern) !== -1 // fails
    return  text.indexOf(pattern) !== -1 // works
}
