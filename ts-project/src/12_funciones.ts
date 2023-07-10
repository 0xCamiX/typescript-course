// Funciones: son nativas de JavaScript y esencialmente funcionan igual en TypeScript.
//            sin embargo, este último con su sistema de tipado, nos ayudará a llevar
//            un mejor control de los parámetros que reciben y los valores que retornan.

(() => {
  type Sizes = 'small' | 'medium' | 'large';

  function createProductoToJson(
    title: string,
    price: number,
    stock: number,
    size: Sizes,
    color: string,
    createdAt: Date) {
    return {
      title,
      price,
      stock,
      size,
      color,
      createdAt
    };
  }

  const producto = createProductoToJson(
    'Camisa',
    100,
    10,
    'small',
    'azul',
    new Date()
  );

  console.log(producto);

  // Arrow functions

  const createProductoToJsonV2 = (
    title: string,
    price: number,
    stock: number,
    color: string,
    createdAt: Date,
    size?: Sizes // params: optional
    ) => {
    return {
      title,
      price,
      stock,
      color,
      createdAt,
      size
    }
  }

  const producto2 = createProductoToJsonV2(
    'Pantalon',
    200,
    5,
    'azul',
    new Date(),
  )

  console.log(producto2.size);

})();
