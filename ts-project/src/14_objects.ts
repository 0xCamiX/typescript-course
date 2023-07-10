(() => {
  type Sizes = 'small' | 'medium' | 'large';

  const login = (email: string, password: string) => {
    console.log(email, password);
  }

  login('juan@gmail.co', '1234');


  const loginObject = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  loginObject({
      email: 'juan@gmail.com',
      password: 1234
  });

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    price: number,
    stock: number
    size: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Camisa',
    price: 100,
    stock: 10,
    size: 'small'
  });

  addProduct({
    title: 'Pantalon',
    price: 300,
    stock: 5,
    size: 'medium'
  });

  console.log(products)

})();
