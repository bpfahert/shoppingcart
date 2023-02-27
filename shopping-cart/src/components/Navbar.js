import React from 'react';

export default function Navbar(props) {

    return (
        <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor: 'honeydew'}}>
            <a className='navbar-brand' href='#'>Shop Name</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-target='#navbarDropdown'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarDropdown'>
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
                    <li className='nav-item'>
                        <a className='nav-link' href='/cart'>Cart</a>
                    </li>
                    <li className='nav-item'>
                        <button type='button' className='btn' data-bs-toggle='modal' data-bs-target='#cartmodal'>Shopping Cart</button>
                        <div className='modal fade' id='cartmodal' tabIndex={-1}>
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h4 className='modal-title'>Shopping Cart</h4>
                                        <button type='button' className='close' data-bs-dismiss='modal'>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className='modal-body'>
                                        Item 1
                                    </div>
                                    <div className='modal-footer'>
                                        <button type='button' className='btn btn-info' data-bs-dismiss="modal">Close Cart</button>                                        
                                        <button type='button' className='btn btn-info'>Check Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}