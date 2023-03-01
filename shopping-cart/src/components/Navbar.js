import React from 'react';
import Cart from '../Cart';

export default function Navbar(props) {

    return (
        <div>
            <nav className='navbar navbar-expand-lg sticky-top navbar-light' style={{backgroundColor: 'honeydew'}}>
                <a className='navbar-brand' href='#'>Shop Name</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbardropdown'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbardropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Home Page</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/shop'>Shop All</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='shopbytypedropdown' data-bs-toggle='dropdown'>
                                Shop by Type
                            </a>
                            <div className='dropdown-menu'>
                                <a className='dropdown-item' href='#'>Type 1</a>   
                                <a className='dropdown-item' href='#'>Type 2</a>   
                                <a className='dropdown-item' href='#'>Type 3</a>   
                            </div> 
                        </li>
                    </ul>
                </div>
                <button type='button' className='btn' data-bs-toggle='modal' data-bs-target='#cartmodal'>Shopping Cart</button>
            </nav>
            <Cart />
        </div>
    )
}