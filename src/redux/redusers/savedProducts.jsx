
import { SAVE_PRODUCT } from "../types";

const initialState = {
  savedList: JSON.parse(localStorage.getItem("savedProducts")) || [], 
};

export const saveProduct = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCT:
      const isAlreadySaved = state.savedList.some(
        (savedItem) => savedItem.id === action.payload.id
      );

      if (!isAlreadySaved) {
        const updatedList = [...state.savedList, action.payload];

        localStorage.setItem("savedProducts", JSON.stringify(updatedList));

        return {
          ...state,
          savedList: updatedList,
        };
      }

      return state;

    default:
      return state;
  }
};
