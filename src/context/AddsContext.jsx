import React, { useReducer, createContext, useContext } from 'react';
import { initialAddsState, addsReducer, addsActions } from 'reducers/adds.reducer';

const AddsContext = createContext();

const AddsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addsReducer, initialAddsState);

  const addNewAdd = (add) => {
    dispatch({ type: addsActions.ADD_NEW_ADD, payload: add });
  };

  const updateAdd = (update) => {
    dispatch({ type: addsActions.UPDATE_ADD, payload: update });
  };

  const deleteAdd = (add) => {
    dispatch({ type: addsActions.DELETE_ADD, payload: add });
  };

  const value = {
    adds: state.adds,
    addNewAdd,
    updateAdd,
    deleteAdd,
  };

  return <AddsContext.Provider value={value}>{children}</AddsContext.Provider>;
};

export const useAddsContext = () => {
  return useContext(AddsContext);
};

export default AddsProvider;
