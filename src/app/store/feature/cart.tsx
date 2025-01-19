import { createSlice } from '@reduxjs/toolkit'




// Define a type for the slice state

type CartState = {
  value: number;
}
// Define the initial state using that type
const initialState: CartState = {
  value: 0,
}

export const CartSlice = createSlice({
  name: 'Cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const { } = CartSlice.actions



export default CartSlice.reducer