import React from 'react'
import { category } from '../data';

const Category = ({item} : {item: category}) => {
    return (
        <>
            <div className='category'>                
                <img className='categoryBackground' src={item.img} alt="" />
                <p className='title'>{item.title}</p>
            </div>
        </>
    )
}

export default Category
