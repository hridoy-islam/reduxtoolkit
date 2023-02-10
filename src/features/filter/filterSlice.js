import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stock: false,
    brands: [],
    keyword: '',
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
         toggleStock : (state, action) => {
            state.stock = !state.stock;
         },
         toggleBrand : (state, action) => {
            if(!state.brands.includes(action.payload)){
                state.brands.push(action.payload)
            }
            else{
                state.brands = state.brands.filter(brand => brand !== action.payload)
            }
            
         }
    }
})

export const {toggleStock, toggleBrand} = filterSlice.actions;

export default filterSlice.reducer;