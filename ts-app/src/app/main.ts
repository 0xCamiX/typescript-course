import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from './products/product.service';

// Usar Faker para generar datos falsos

for (let i = 0; i < 100; i++) {
  addProduct({
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    stock: faker.datatype.number({min: 0, max: 100}),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    descriptionId: faker.datatype.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['ropa', 'zapatos', 'accesorios'], 2),
  })
}

console.log(products);
const product1 = products[0];
updateProduct(product1.id, {
  name: 'Nuevo nombre',
  price: 1000,
  stock: 10,
});

findProducts({
  isNew: true,
  tags: ['ropa'],
});


