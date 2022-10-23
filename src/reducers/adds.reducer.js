export const initialAddsState = {
  adds: {},
};

export const addsActions = {
  ADD_NEW_ADD: 'ADD_NEW_ADD',
  UPDATE_ADD: 'UPDATE_ADD',
  DELETE_ADD: 'DELETE_ADD',
};

const updateAdd = (payload, adds) => {
  const add = adds.find(({ id }) => payload.addId === id);

  add[payload.field] = payload.update;

  return [...adds];
};

export const addsReducer = (state, { type, payload }) => {
  switch (type) {
    case addsActions.ADD_NEW_ADD: {
      return {
        ...state,
        adds: {
          ...state.adds,
          [payload.productId]: state.adds[payload.productId]
            ? [...state.adds[payload.productId], payload]
            : [payload],
        },
      };
    }

    case addsActions.UPDATE_ADD: {
      return {
        ...state,
        adds: {
          ...state.adds,
          [payload.productId]: updateAdd(payload, state.adds[payload.productId]),
        },
      };
    }

    case addsActions.DELETE_ADD: {
      return {
        ...state,
        adds: {
          ...state.adds,
          [payload.productId]: state.adds[payload.productId].filter(
            ({ id }) => id !== payload.addId
          ),
        },
      };
    }

    default:
      return state;
  }
};
