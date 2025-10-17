export const ADD_CART = (dispatch, optionType) => {
  dispatch({
    type: 'ADD_CART',
    payload: optionType,
  });
};

export const REMOVE_CART = (dispatch, optionType) => {
  dispatch({
    type: 'REMOVE_CART',
    payload: optionType,
  });
};
