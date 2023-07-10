// Never type is a type that never occurs

const withoutEnd = () => {
  while (true) {
    console.log("Hello");
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail("Input is not a string or array");
}

console.log(example("hola"));
console.log(example([1, 2, 3]));
console.log(example(1));
console.log(example("Fail"));
