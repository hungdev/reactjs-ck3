import "./styles.css";
// import redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import màn hình
import Routers from "./Routers";

// import reducer
import productReducer from "./store/productSlice";
import wishListSlice from "./store/wishListSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    wishList: wishListSlice
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
