import { createSlice} from "@reduxjs/toolkit";
const initialState = []
export function getProducts(inp){
    return async function getProductsThunk(dispatch){
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.bittrex.com/v3/markets/${inp}/summary`, { method: 'GET' , mode : "cors"});
    const data = await response.json();
    console.log(response)
    response.status === 200 &&  dispatch(fetchProducts(data))
  }}
    
const getSlice = createSlice ({
    name: "getSlice",
    initialState,
    reducers: {
        fetchProducts(state, action){
            console.log(state, action)
            state.push(action.payload)
        }
    },
})
export const {fetchProducts} = getSlice.actions
export default getSlice.reducer
