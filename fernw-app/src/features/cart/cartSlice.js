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
        },
        checkout: state => {
            state.products = [];
        }
    }
});

export const selectProducts = (state) => { console.log("get products", state.warenkorb); return state.warenkorb.products };

export const { addProduct, removeProduct, checkout } = cartSlice.actions;
