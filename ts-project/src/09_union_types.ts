// Union Types: Nos permite definir más de un tipo de dato a una variable.
// argumento de una función, etc.

(() => {

  let userID: number | string;
  userID = 10;
  userID = "10x9";

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`STRING: ${myText.toUpperCase()}`);
    } else {
      console.log(`NUMBER: ${myText.toFixed(2)}}`);
    }
  }

  greeting("Hola");
  greeting(100);



})();
