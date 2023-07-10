import {addProduct as createProduct, calcStock, products, calcTotalStock} from './product.service';

createProduct({
  title: 'Camisa',
  price: 100,
  stock: 100,
  size: 'small'
});

createProduct({
  title: 'Chaleco',
  price: 100,
  stock: 100,
  size: 'small'
});

console.log(products)
const total = calcTotalStock(products);
console.log(total);

const number = calcStock({
  title: 'Camisa',
  price: 100,
  stock: 100,
  size: 'small'
})
console.log(number)

