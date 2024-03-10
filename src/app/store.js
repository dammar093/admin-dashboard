import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../feature/theme/themeSlice'
import productReducer from '../feature/products/productSlice'
import orderReducer from '../feature/order/orderSlice'
import userReducer from '../feature/user/userSlice'
import categoryReducer from '../feature/category/categorySlice'

export const store=configureStore({
  reducer:{
    themeMode:themeReducer,
    products:productReducer,
    order:orderReducer,
    user:userReducer,
    category:categoryReducer
  }
})