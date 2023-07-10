export const createProduct = (
  id: number | string,
  name: string,
  price: number,
  isNew: boolean,
  description: string = "No description" // default value
) => {
  return {
    id,
    name,
    price,
    isNew,
    description
  };
}

const p1 = createProduct(1, "Laptop", 1000, true);
const p2 = createProduct(2, "Mouse", 50, false, "Mouse inalámbrico");

console.log(p1);
console.log(p2);
