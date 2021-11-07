import { createSlice } from "@reduxjs/toolkit";

function loadProducts() {
    return localStorage.getItem("warenkorb") ? JSON.parse(localStorage.getItem("warenkorb")) : [];
}

function saveProducts(products) {
    console.log("saving products to local storage", products);
    localStorage.setItem("warenkorb", JSON.stringify(products.length > 0 ? products : []))
}

export const cartSlice = createSlice({
    name: "warenkorb",
    initialState: {
        products: loadProducts(),
    },
    reducers: {
        addProduct: (state, action) => {
            console.log("add product", state, action);
            state.products.push(action.payload);
            saveProducts(state.products);
        },
        removeProduct: (state, action) => {
            console.log("remove product", state, action);
            state.products = state.products.filter(item => item.id !== action.payload.id);
            saveProducts(state.products);
        },
        checkout: state => {
            state.products = [];
        }
    }
});

export const selectProducts = (state) => { console.log("get products", state.warenkorb); return state.warenkorb.products };

export const { addProduct, removeProduct, checkout } = cartSlice.actions;
