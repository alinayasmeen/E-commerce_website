// CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image as IImage } from 'sanity';

// Define the structure of a cart item
interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  image: IImage;
  description: string;
}

// Initial state is an array of cart items
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
