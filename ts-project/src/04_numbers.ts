// Numbers

/* El tipo de dato number se usa para variables que contedran números
   positivos, negativos o decimales.

   Operaciones:

    + Suma
    - Resta
    * Multiplicación
    / División
    % Módulo
    ** Potencia

*/

(() => {
  let productPrice = 100;
  productPrice = 100.5;
  console.log("productPrice", productPrice);

  let customerAge: number = 25;
  customerAge = customerAge + 1;


  // colocarla de forma explicita si no se inicializa
  let productInStock: number;
  productInStock = 10;

  let discount = parseInt('dsad');
  console.log('discount', discount);

  if (discount > 0) {
    console.log('Hay descuento');
  } else {
    console.log('No hay descuento');
  }

  let hex = 0xf00d; // 0x para hexadecimal
  console.log('hex', hex);

  let bin = 0b1010; // 0b para binario
  console.log('bin', bin);

  const myNumber: Number = 10; // mala práctica
  const myNumber2: number = 10; // buena práctica

})();
