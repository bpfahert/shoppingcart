import {configureStore} from '@reduxjs/toolkit';
import store, { storeSlice } from './store';
import storeReducer from './store';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        store: storeReducer,
        cartStore: cartReducer,
    },
});