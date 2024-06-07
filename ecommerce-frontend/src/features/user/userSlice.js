import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUser } from './userAPI';

const initialState = {
  userInfo: 0,
  status: 'idle',
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (amount) => {
    const response = await fetchLoggedInUser(amount);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
