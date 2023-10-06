import React from 'react';
//style
import './FastFoodItems.css'
//icon
import {HiShoppingCart } from 'react-icons/hi';

const FastFoodItems = ({name , price , ingredients , imageUrl  , delay }) => {
    return (
        <div className='card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz' style={{animationDelay: delay + 's'}} >
            <span className="badge badge-end badgeshadow bg-success fs-md fw-medium">
                قیمت : {price.toLocaleString()} تومان
            </span>
            <div className="cart__placeholder">
                <img className='card-img-top' src={imageUrl} />
            </div>
            <div className="card-body text-center pt-4 d-flex flex-column">
                <h5 className="mb-2"> {name} </h5>
                <div className="fs-ms fw-bold text-muted mb-3">
                    {ingredients}
                </div>
                <button className="btn-outline-success btn-sm w-100 mt-auto fw-bold">
                    <HiShoppingCart className='fs-5 ms-3' />
                    افزون به سبد خرید
                </button>
            </div> 
        </div>
    );
};

export default FastFoodItems;