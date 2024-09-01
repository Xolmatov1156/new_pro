import { combineReducers } from "redux";
import { getProducts } from "./getProducts";
import { likeList } from "./likeList";
import {saveProduct} from './savedProducts'

const rootReducer = combineReducers({
  saveProduct,
  likeList,
  getProducts
  // Add other reducers here...
});

export default rootReducer;