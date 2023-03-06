import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import cartSlice, { initialState, addToCart } from '../components/redux/cartSlice';
import userEvent from '@testing-library/user-event';
import Item from '../components/Item';

describe('testing for cartSlice', () => {
    test('initializes correctly', () => {
        const cartSliceInit = cartSlice(initialState, { type: 'Unknown' });
        expect(cartSliceInit).toBe(initialState);
    });

    test('addToCart adds an item to the cart', () => {
        const testObj = {
            name: 'Test',
            price: 10,
            id: 100,
            quantity: 1,
        };
        
        const afterReducerOperation = cartSlice(
            initialState,
            addToCart(testObj)
        );
        expect(afterReducerOperation.cart.length).toBe(1);
    })
});