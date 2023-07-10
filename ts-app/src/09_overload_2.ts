// Juan => ['J', 'u', 'a', 'n'] => string[]
// [J, u, a, n] => 'Juan' => string

// overload function

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

// export function parseStr(input: string | string[]): string | string[] {
//   if (typeof input == 'string'){
//     return input.split(''); // string[]
//   } else if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return "Error";
//   }
// }

export function parseStr(input: unknown): unknown {
  if (typeof input == 'string'){
    return input.split(''); // string[]
  } else if (Array.isArray(input)) {
    return input.join(''); // string
  }
}


const result = parseStr('Juan');
const result2 = parseStr(['J', 'u', 'a', 'n']);

console.log(parseStr(result));
console.log(parseStr(result2));
