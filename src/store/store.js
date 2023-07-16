import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./getSlice"
const store = configureStore({
    reducer: {
        getOne : getSlice
    }
})

export default store;
