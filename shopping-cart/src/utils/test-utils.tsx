import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { storeSlice } from '../components/redux/store';

const storeReducer = storeSlice.reducer;

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = configureStore({
            reducer: { storeReducer },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return < Provider store={store}>{children}</Provider>;
    }
    
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions })};
}