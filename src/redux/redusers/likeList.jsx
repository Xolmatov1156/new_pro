
import { SAVE_LIKE } from "../types";

const initialState = {
  saveLikeList: JSON.parse(localStorage.getItem("likeList")) || [],
};

export const likeList = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LIKE:
      const isAlreadyLiked = state.saveLikeList.some(
        (likedItem) => likedItem.id === action.payload.id
      );

      if (!isAlreadyLiked) {
        const updatedList = [...state.saveLikeList, action.payload];

        localStorage.setItem("likeList", JSON.stringify(updatedList));

        return {
          ...state,
          saveLikeList: updatedList,
        };
      }

      return state;

    default:
      return state;
  }
};
