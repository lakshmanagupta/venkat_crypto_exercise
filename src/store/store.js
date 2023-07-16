import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./getSlice"

const store = configureStore({
    reducer: {
        getAllSummary : getSlice
    }
})

export default store;
