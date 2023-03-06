import React from 'react';
import Navbar from './components/Navbar';
import ShopSection from './components/ShopSection';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './components/redux/cartSlice';

export default function Shop() {
    const { itemArray } = useSelector(state => state.store);
    const { movieStock } = useSelector(state => state.store);
    const {gameStock } = useSelector(state => state.store);
    return (
        <div>
            <Navbar />
            <ShopSection title={'Bookstore'} items={itemArray}/>
            <ShopSection title={'Movies'} items={movieStock} />
            <ShopSection title={'Board Games'} items={gameStock} />
        </div>
    )
}