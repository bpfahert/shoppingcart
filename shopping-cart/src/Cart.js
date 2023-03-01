import React from 'react';
import { useSelector, useDispatch, createDispatchHook } from 'react-redux';
import { addToCart, removeFromCart } from './components/redux/store';

export default function Cart(props) {
    const dispatch = useDispatch();

    const { cart } = useSelector(state => state.store);
    // TODO: FIX TOTAL SO ONLY 2 DECIMAL POINTS ARE DISPLAYED
    const { total } = useSelector(state => state.store);
    const cartDisplay = cart.map((item) => {
        return <li className='mb-2'>{item.name} Price: {item.price} Qty: {item.amount} <button type='button' onClick={() => dispatch(removeFromCart(item))} className='btn btn-sm btn-outline-danger'>Remove from Cart</button></li>
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
                                            Total: {total}
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