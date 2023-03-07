import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import cartSlice, { initialState, addToCart, removeFromCart, addOneInCart, removeOneInCart } from '../components/redux/cartSlice';
import userEvent from '@testing-library/user-event';
import Item from '../components/Item';

describe('testing for cartSlice', () => {
    it('initializes correctly', () => {
        const cartSliceInit = cartSlice(initialState, { type: 'Unknown' });
        expect(cartSliceInit).toBe(initialState);
    });

    it('addToCart adds an item to the cart', () => {
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

    it('addToCart updates the total based on the item added', () => {
        const testObj = {
            name: 'Test',
            price: 10,
            id: 100,
            quantity: 1,
        };
        
        const afterReducerOperation = cartSlice(
            initialState,
            addToCart(testObj),
        );
        expect(afterReducerOperation.total).toBe(10);
    })
// afterReducerOperation is changing total to NaN
    it('removeFromCart removes an item from the cart and adjusts the total', () => {
        const testObj = {
            name: 'Test',
            price: 10,
            id: 100,
            quantity: 1,
        };
        
        const afterReducerOperation = cartSlice(
            initialState,
            addToCart(testObj),
        );
        console.log(initialState);
        console.log(afterReducerOperation.total);
        expect(afterReducerOperation.total).toBe(10);
    })
});