import React from 'react';
import { useSelector, useDispatch, createDispatchHook } from 'react-redux';
import { addToCart, removeFromCart, addOneInCart, removeOneInCart } from './components/redux/cartSlice';

export default function Cart(props) {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartStore);
    const { total } = useSelector(state => state.cartStore);

    const cartDisplay = cart.map((item) => {
        return (
            <div className='row' style={{border: 'solid 1px black', height:'8rem', marginBottom: '3px'}}>
                <div className='col-md-3'>
                    <img className='img-thumbnail' src={item.img} alt='item pic' />
                </div>
                <div className='col-md-6'>
                    <span>{item.name}</span>
                    <div>
                        <button type='button' onClick={() => dispatch(removeOneInCart(item))} className='btn btn-outline-secondary btn-sm'>-</button> 
                        Qty: {item.amount}
                        <button type='button' className='btn btn-sm btn-outline-secondary' onClick={() => dispatch(addOneInCart(item))}>+</button> 
                    </div>
                </div>
                <div className='col-md-2'>
                    <span>{item.price}</span>
                </div>
                <div className='col-md-1'  style={{display:'flex', justifyContent: 'flex-end'}}>
                    <button type='button' onClick={() => dispatch(removeFromCart(item))} className='btn btn-outline-info text-center' style={{height:'40px', marginTop: '2px'}}>&times;</button>
                </div>
            </div>
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
                                            <div className='container-fluid'>
                                                {cartDisplay}
                                                Total: {Number.parseFloat(total).toFixed(2)}
                                            </div>
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