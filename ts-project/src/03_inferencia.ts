// scope

(() => {

// TypeScript puede inferir el tipo de una variable, a pesar de no
// haber sido declarada explícitamente.

let myProductName: string = "Tablet";
let myProductPrice: number = 1243;
// let myProductName: String = "Tablet";

// myProductName = 123; // Error

myProductName.toUpperCase();
console.log(myProductName);

myProductName = "CHANGE";
myProductName.toUpperCase();

myProductPrice.toFixed(2);

const myProductStock = 1000;

})();
