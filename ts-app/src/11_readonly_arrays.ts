// const numbers: number[] = [1, 2, 3, 4, 5];

// numbers.push(5);
// numbers.pop();
// numbers.unshift(1);

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// no mutating methods

numbers.filter((n) => n > 2);
numbers.reduce((a, b) => a + b, 0);
numbers.map((n) => n * 2);
