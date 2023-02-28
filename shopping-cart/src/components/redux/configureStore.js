import {configureStore} from '@reduxjs/toolkit';
import store, { storeSlice } from './store';
import storeReducer from './store'

export default configureStore({
    reducer: {
        store: storeReducer,
    },
});