import { createSlice } from '@reduxjs/toolkit'

type ProductState = {
    value: number;
}






// Define the initial state using that type
const initialState: ProductState = {
  value: 0,
}

export const ProductSlice = createSlice({
  name: 'Cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const { } = ProductSlice.actions



export default ProductSlice.reducer