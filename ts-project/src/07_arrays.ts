// Arrays: es una colección de datos ordenada.

(() => {

  let prices = [100, 200, 300, 400, 500];
  prices.push(600);
  prices.push(700);
  prices.push(800);

  // arrays con diferentes datos

  // este tipo de array soporta number, string, boolean usando inferencia.
  let data = [100, '200', true, false]
  data.push("hola")

  // array sin declarar el tipo de dato

  let data2: (number | string | boolean | Object)[] = ["hola",2,4,6,"mundo"];
  data2.push({name: "Juan", age: 30})
  data2.push([])

  let numbers = [1,2,3,4,5,6,7,8,9,10];
  numbers = numbers.map(item => item * 2)

  console.log(numbers);

})();
