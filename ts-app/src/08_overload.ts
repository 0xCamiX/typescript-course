// Juan => ['J', 'u', 'a', 'n'] => string[]
// [J, u, a, n] => 'Juan' => string

// overload function

function parseStr(input: string | string[]): string | string[] {
  if (typeof input == 'string'){
    return input.split(''); // string[]
  } else if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return "Error";
  }
}

console.log(parseStr('Juan'));
console.log(parseStr(['J', 'u', 'a', 'n']));

// tipado del return con as

const result = parseStr('Juan') as string[];
console.log(result.map((char) => char.toUpperCase()));

const result2 = parseStr(['J', 'u', 'a', 'n']) as string;
console.log(result2.toLowerCase());
