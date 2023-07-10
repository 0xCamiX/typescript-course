// Booleans: Este tipo de dato retorna true o false

(() => {

  let isPro: boolean = true;
  isPro = false;

  let isPro2: boolean = false;
  console.log('isPro2', isPro2);

  let newPro = !isPro2;
  console.log('newPro', newPro);

  const random = Math.random();
  console.log('random', random);
  isPro = random >= 0.5 ? true : false;
  console.log('isPro', isPro);
})();
