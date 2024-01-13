import {ADD_TO_CART} from './constants';
const initialState = []; // items will be stored in array

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
};
