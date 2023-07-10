import {Product} from './product.model'

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (product: Product): number => {
  return product.stock;
}

export const calcTotalStock = (products: Product[]): number => {
  return products.reduce((acc, product) => acc + product.stock, 0);
}
