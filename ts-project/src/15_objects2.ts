(() => {
  type Sizes = 'small' | 'medium' | 'large';
  type Product = {
    title: string,
    price: number,
    stock: number
    size: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Camisa',
    price: 100,
    stock: 10,
    size: 'small'
  });

  console.log(products)

})();
