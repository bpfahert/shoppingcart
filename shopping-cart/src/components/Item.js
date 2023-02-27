import React from 'react';

export default function Item(props) {
    

    return (
        <div className='card mb-3' style={{width: '14rem'}}>
            <img className='card-img-top' src='#' alt='item' />
            <div className='card-body text-center'>
                <h4 className='text-center'>{props.name}</h4>
                <p className='card-text'>${props.price}</p>
                <button type='button' className='btn btn-info btn-sm'>Add to Cart</button>
            </div>
        </div>
    )
}