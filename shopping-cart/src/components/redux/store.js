import { createSlice } from '@reduxjs/toolkit'


export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        itemArray: [
            {name: 'Book', price: 9.99, id: 0},
            {name: 'Bookmark', price: 2.99, id: 1},
            {name: 'Magazine', price: 3.99, id: 2}
        ],
        cart: [],
        total: (0.00)
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total += (action.payload.price * action.payload.amount);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.total -= (action.payload.price * action.payload.amount);
        }
    },
})

export const { addToCart, removeFromCart } = storeSlice.actions;

export default storeSlice.reducer;