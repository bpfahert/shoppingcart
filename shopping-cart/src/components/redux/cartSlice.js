import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    cart: [],
    total: 0.00,
}

export const cartSlice = createSlice({
    name: 'cartStore',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if item is already in the cart, update the quantity if so or add to cart if not.
            if(state.cart.some(item => item.id === action.payload.id)) {
                state.cart = state.cart.map(item => {
                    return item.id === action.payload.id ? {name: item.name, price: item.price, id: item.id, amount: (item.amount + action.payload.amount)} : item;
                })
                state.total += (action.payload.price * action.payload.amount);
            }
            else {
                state.cart = [...state.cart, action.payload];
                state.total += (action.payload.price * action.payload.amount);    
            }
        },
        removeFromCart: (state, action) => {
            const removedItem = (state.cart.find(item => item.id === action.payload.id));
            state.total -= (removedItem.price * removedItem.amount);
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        //TODO: Update to make it simpler?
        addOneInCart: (state, action) => {
            state.cart = state.cart.map(item => { 
                return item.id === action.payload.id ? {name: item.name, price: item.price, id: item.id, amount: (item.amount + 1)} : item;
            });
            state.total += action.payload.price;
        },
        removeOneInCart: (state, action) => {
            if (action.payload.amount > 1) {
                state.cart = state.cart.map(item => { 
                    return item.id === action.payload.id ? {name: item.name, price: item.price, id: item.id, amount: (item.amount - 1)} : item;
                });
                state.total -= action.payload.price;
            }
        }
    },

})

export const { addToCart, removeFromCart, addOneInCart, removeOneInCart } = cartSlice.actions;

export default cartSlice.reducer;