// manipulación de datos

import { faker } from '@faker-js/faker';
import { Product } from './product.model'
import { CreatedProductDto, UpdatedProductDto, FindProductDto } from './product.dto'

export const products: Product[] = [];

// read only

export const addProduct = (product: CreatedProductDto): Product => {
  const newProduct = {
    ...product,
    id: faker.datatype.uuid(),
    name: product.name,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    description: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      short: faker.lorem.sentence()
    }
  }
  products.push(newProduct);
  return newProduct;
}

// Acceder al tipado por indice

export const updateProduct = (id: Product['id'], changes: UpdatedProductDto): Product => {
  const index = products.findIndex(product => product.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  //...

  return products;
}
