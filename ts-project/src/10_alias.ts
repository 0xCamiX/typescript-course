// Alias: Nos permiten darle un nombre a uno o varios tipos de datos
//        en conjunto.

(() => {

  // alias
  type UserID = number | string;

  function greeting (myText: UserID, size: Sizes) {
    if (typeof myText === "string") {
      console.log(`STRING: ${myText.toUpperCase()}`);
    }
  }

  // literal types

  let shirtSize: 'S' | 'M' | 'L' | 'XL';

  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  // shirtSize = 'Small size'; // Error

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize2: Sizes;

  shirtSize2 = 'S';
  shirtSize2 = 'M';
  shirtSize2 = 'L';
  shirtSize2 = 'XL';

  // llamar a la función

  greeting("14212", "S");
  greeting(100, "M");

})();
