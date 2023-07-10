const prices: (number | string)[] = [10.99, 5.99, 3.99, 6.59]; // array

prices.push(23);
prices.push('23');

// tuple. posición fija

const user: [string, number] = ['nicolbytes', 15];

user.push('juanbytes', 20);

// destructuring of the tuple

const [username] = user;

console.log(username);
