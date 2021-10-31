import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "warenkorb",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            console.log("add product", state, action);
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            console.log("remove product", state, action);
            state.products = state.products.filter(item => item.id !== action.payload.id);
        }
    }
})

export const selectProducts = (state) => { console.log("get products", state); return state.products }

export const { addProduct, removeProduct } = cartSlice.actions;
