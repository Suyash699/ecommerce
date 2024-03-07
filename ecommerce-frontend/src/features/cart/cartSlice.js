import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchItemsByUserId } from './cartAPI';

const initialState = {
  value: 0,
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserId',
  async(userId)=>{
    const response = await fetchItemsByUserId(userId);
    return response.data; 
  }
)

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
        console.log("item added to cart");
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
        console.log("fetchItemsByUserId called");
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectItems = (state) => state.cart.value;

export default counterSlice.reducer;
