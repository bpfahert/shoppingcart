import React from 'react';
import Navbar from './components/Navbar';
import ShopSection from './components/ShopSection';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './components/redux/store';

export default function Shop() {
    const { itemArray } = useSelector(state => state.store);

    return (
        <div>
            <Navbar />
            <ShopSection title={'Bookstore'} items={itemArray}/>
        </div>
    )
}