(() => {
  let productTitle: string = 'Samsung Galaxy S20 FE';
  productTitle = "Samsung Galaxy S21";
  let productPrice: number = 1000;

  const productDescription = "This is a very good phone";
  console.log('productDescription', productDescription);

  // usando backticks

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
  `;

  console.log('summary', summary);


})();
