import React from 'react';
import Item from './Item';

export default function ShopSection(props) {
    const sectionItems = props.items.map((item) => {
        return <li> <Item name={item.name} price={item.price} id={item.id} key={item.id} img={item.img}/> </li>
    })

    return (
     <div className='container'>
        <h2>{props.title}</h2>
        <ul style={{listStyle: 'none', display:'flex', flexFlow: 'row wrap', justifyContent: 'space-between'}}>
            {sectionItems}
        </ul>
     </div>
    )
}