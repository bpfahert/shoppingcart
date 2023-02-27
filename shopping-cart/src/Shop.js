import React from 'react';
import Navbar from './components/Navbar';
import ShopSection from './components/ShopSection';

export default function Shop() {
    const testArray = [
        {name: 'Book', price: 9.99},
        {name: 'Bookmark', price: 2.99},
        {name: 'Magazine', price: 3.99}
    ]

    
    return (
        <div>
            <Navbar />
            <ShopSection title={'Bookstore'} items={testArray}/>
        </div>
    )
}