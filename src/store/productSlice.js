import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [] // [{id: 1, name: abc, quantity: 1}]
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action.payload);
      //cach 1
      // const isExisted = state.productList.find(product => product.id === action.payload?.id);
      // state.productList = isExisted ? state.productList.map(product => {
      //   if (action.payload?.id === product.id) { // tim thấy sản phẩm trong giỏ hàng
      //     return ({ ...product, quantity: product.quantity + 1 });
      //   } else {
      //     return product;
      //   }
      // }) : [...state.productList, action.payload];

      // cach 2
      // tìm nó có trong danh sách sản phẩm hay không
      const findIndexItem = state.productList.findIndex(product => product.id === action.payload?.id);
      if (findIndexItem !== -1) { // tìm thấy ( vì hàm findIndex trả về -1 là tìm thấy, đọc docs ở đây: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
        state.productList[findIndexItem].quantity += 1; // tăng thêm 1 giá trị ở quantity
      } else { // nếu không thì thêm mới phần tử
        state.productList = [...state.productList, action.payload];
      }
    },

    removeProduct: (state, action) => {
      console.log("action", action.payload); // {id:1, name: 'adidas',...}
      state.productList = state.productList.filter(el => el.id !== action.payload.id);
    },
    decreaseQuantity: (state, action) => {
      const findIndexItem = state.productList.findIndex(product => product.id === action.payload?.id);
      // Mong muốn xoá luôn khỏi giỏ hàng
      // if (action.payload.quantity == 1) {
      //   state.productList = state.productList.filter(el => el.id !== action.payload.id);
      // } else {
      //   state.productList[findIndexItem].quantity -= 1;
      // }

      // mong muốn để lại 1
      if (action.payload.quantity !== 1) {
        state.productList[findIndexItem].quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const findIndexItem = state.productList.findIndex(product => product.id === action.payload?.id);
      state.productList[findIndexItem].quantity += 1;
    },
    // removeTask: (state, action) => {
    //   console.log("action", action.payload);
    //   // do something here
    // }
  }
});

export const { addProduct, removeProduct, decreaseQuantity, increaseQuantity } = productSlice.actions;

export default productSlice.reducer;
