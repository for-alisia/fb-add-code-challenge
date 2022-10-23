import React, { useReducer, createContext, useContext, useEffect, useCallback } from 'react';
import { initialProductsState, productsReducer, actions } from 'reducers/products.reducer';
import productsService from 'services/products.service';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialProductsState);

  const setProducts = (products) => dispatch({ type: actions.SET_PRODUCTS, payload: products });

  const fetchProducts = useCallback(async () => {
    const { data, error } = await productsService.getProducts();

    if (error) {
      console.log('Somethng went wrong');
    }

    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const value = {
    products: state.products,
    setProducts,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProductContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
