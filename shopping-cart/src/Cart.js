import React from 'react';
import { useSelector, useDispatch, createDispatchHook } from 'react-redux';
import { addToCart, removeFromCart, addOneInCart, removeOneInCart } from './components/redux/cartSlice';

export default function Cart(props) {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartStore);
    const { total } = useSelector(state => state.cartStore);

    const cartDisplay = cart.map((item) => {
        return (
            <li style={{display: 'flex', justifyContent: 'space-evenly'}} className='mb-2'>
                <span>{item.name}</span>
                <span>Price: {item.price}</span>
                <span>
                    <button type='button' onClick={() => dispatch(removeOneInCart(item))} className='btn btn-outline-secondary btn-sm'>-</button> 
                    Qty: {item.amount}
                    <button type='button' className='btn btn-sm btn-outline-secondary' onClick={() => dispatch(addOneInCart(item))}>+</button> 
                </span>
                <button type='button' onClick={() => dispatch(removeFromCart(item))} className='btn btn-sm btn-outline-danger'>Remove from Cart</button>
            </li>
        )
    })

    return (
        <div>
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
                                            {cartDisplay}
                                            Total: {Number.parseFloat(total).toFixed(2)}
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-info' data-bs-dismiss="modal">Close Cart</button>                                        
                                            <button type='button' className='btn btn-info'>Check Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}