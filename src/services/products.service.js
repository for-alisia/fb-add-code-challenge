const getProducts = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  try {
    const data = await fetch('/api/products.json', config);
    const products = await data.json();

    return {
      data: products,
      error: false,
    };
  } catch (err) {
    console.log(err);

    return {
      data: [],
      error: true,
    };
  }
};

const productsService = {
  getProducts,
};

export default productsService;
