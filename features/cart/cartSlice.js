import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartLength: 0,
    subTotal: 0,
    Transaction: 850,
    deliveryFee: 1000,
    total: 0
    
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.cart.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.cart.push(action.payload);
                state.cartLength = state.cart.length;
                const itemPrice = action.payload.current_price ? action.payload.current_price[0]?.NGN || 0 : 0;
                state.subTotal += parseFloat(itemPrice);
                state.total = state.subTotal + state.Transaction + state.deliveryFee;
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
            state.cartLength = state.cart.length;
            const itemPrice = action.payload.current_price ? action.payload.current_price[0]?.NGN || 0 : 0;
            state.subTotal -= parseFloat(itemPrice);
            state.total = state.subTotal + state.Transaction + state.deliveryFee;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

