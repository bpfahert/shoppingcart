import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';

export default function Item(props) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(1);

    const itemObj = {
        name: props.name,
        price: props.price,
        id: props.id,
        amount: Number(quantity),
    }

    const handleChange = (event) => {
        setQuantity(event.target.value);
    }

    return (
        <div className='card mb-3' style={{width: '14rem'}}>
            <img className='card-img-top' src='#' alt='item' />
            <div className='card-body text-center'>
                <h4 className='text-center'>{props.name}</h4>
                <p className='card-text'>${props.price}</p>
                <label htmlFor='quantitybtn'>Qty:</label>
                <select id='quantitybtn' value={quantity} onChange={handleChange} className='w-25 mb-3 ml-2 mt-3'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>          
                </select>
                <p><button type='button' className='btn btn-info btn-sm' onClick={() => dispatch(addToCart(itemObj))}>Add to Cart</button></p>
            </div>
        </div>
    )
}