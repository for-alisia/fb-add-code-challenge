export const initialProductsState = {
  products: [],
};

export const actions = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  isLoading: true,
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
