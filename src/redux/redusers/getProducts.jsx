import {GET_ALL_PRODUCTS} from '../types'
const initialState =  {
  getAllProducts:[]
}

export const getProducts = (state = initialState, action) => {
  switch(action.type){
    case GET_ALL_PRODUCTS:
      return{
        getAllProducts:[...action.payload]
      }
      default:
        return state;
  }
}
