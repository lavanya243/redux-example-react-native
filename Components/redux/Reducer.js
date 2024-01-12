import {ADD_TO_CART} from './Constants';
const initialState = []; // items will be stored in array

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
};
