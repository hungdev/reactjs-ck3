import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [] // [1,5,3,2]
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action.payload);
      state.productList = [...state.productList, action.payload];
    },
    removeProduct: (state, action) => {
      console.log("action", action.payload); // {id:1, name: 'adidas',...}
      state.productList = state.productList.filter(el => el.id !== action.payload.id);
    },
    // removeTask: (state, action) => {
    //   console.log("action", action.payload);
    //   // do something here
    // }
  }
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
