import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartslice";

const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})

export default store