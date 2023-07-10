export const createProduct = (
  id: number | string,
  name: string,
  price: number,
  isNew: boolean,
  description?: string
) => {
  return {
    id,
    name,
    price,
    isNew,
    description: description ?? "No description", // if description is undefined, use "No description"
  };
}

// 0 === false
// '' === false
// null === false
// undefined === false
// NaN === false
// false === false

// nullish coalescing operator: ??

const p1 = createProduct(1, "Laptop", 1000, true);
const p2 = createProduct(2, "Mouse", 50, false, "Mouse inalámbrico");

console.log(p1);
console.log(p2);
