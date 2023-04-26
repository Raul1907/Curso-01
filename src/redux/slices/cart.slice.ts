import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getItem } from '../../utils/localStorage';

// Define a type for the slice state
interface CartAddState {
  id: string | number;
  name: string;
  image: string;
  info: string;
}

interface CartRemoveState {
  id: string | number;
}

// Define the initial state using that type
//si existe el valor en local storage lo recupera si no solo asigna vacio el array
const initialState: CartAddState[] = getItem('cart') || [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart : ( state, action: PayloadAction<CartAddState> ) =>{
      const { id } = action.payload;
      //solo si no esta agregado, se agrega
      if(state.length === 0 ||
         state.filter( (item) => item.id === id).length === 0 ){
          state.push(action.payload);
         }
    },
    removeToCart: ( state, action: PayloadAction<CartRemoveState> ) => {
      const { id } = action.payload;
      if( state.some( (item) => item.id === id )){
        return state = state.filter( (item => item.id !== id) )
      }
    }
  },
})

export const { addToCart, removeToCart } = cartSlice.actions
