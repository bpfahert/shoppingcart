// import store from './redux/store';
import Item from './Item';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/store';

describe('Item redux states test', () => {
    it('adds item to cart in state', () => {
        const { cart } = useSelector(state => state.store);
        const testObj = {name: 'dvd', price: 14.99, id: 5, amount: 1};
        dispatch(addToCart(testObj));
        expect(cart[0]).toEqual({testObj});
    })
})