import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import data from './db.json';


const initialState = {
  productList: [], // [{id: 1, name: abc, quantity: 1}],
  loading: false
};

export const getProduct = createAsyncThunk('product/getProduct', async (params, thunkAPI) => {
  // const result = await axios.get('http://localhost:3000/product');
  // return result.data;

  // ví dụ để deploy
  return data.product;
});

export const productThunkSlice = createSlice({
  name: "productThunkSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
    },

  },
  // Chỗ này là nơi nhận data từ việc call api ở trên createAsyncThunk ( ví dụ dòng 14 )
  extraReducers: {
    [getProduct.pending]: (state, action) => { // trước khi gọi api
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => { // gọi api trả về thành công
      console.log('action', action.payload);
      state.loading = false;
      state.productList = [...state.productList, ...action.payload];
    },
    [getProduct.rejected]: (state, action) => { // gọi api thất bài
      state.loading = false;
    },
  }
  // cách viết 2: để nhận data từ api: https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk
});

export const { addProduct, } = productThunkSlice.actions;

export default productThunkSlice.reducer;
