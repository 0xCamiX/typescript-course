type Sizes = 'S' | 'M' | 'L' | 'XL';

// conjunto de propiedades que deben tener los objetos
// interface se puede extender.

interface Product  {
  name: string;
  price: number;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

const product: Product = {
  name: 'T-shirt',
  price: 100,
  createdAt: new Date(),
  stock: 10,
  size: 'M'
}

const addProduct = (product: Product) => {
  products.push(product);
}

addProduct(product)
