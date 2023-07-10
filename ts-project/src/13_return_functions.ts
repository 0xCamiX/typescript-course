(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach(price => {
      total += price;
    });
    return total.toString();
  }

  const rta = calcTotal([10, 20, 30, 40, 50]);
  console.log(rta);

  // funciones que no retornan nada

  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices);
    console.log(`El total es: ${total}`);
  }

  printTotal([10, 20, 30, 40, 50]);

})();
