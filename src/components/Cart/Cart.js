import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }
    else if(total > 35){
       shipping = 11.99;
    }
    else if(total > 0){
        shipping = 19.99;
    }
    const tax = total * 0.1;
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
          <h3>Order Summary</h3>
          <p>Items ordered:{cart.length}</p>
          <p><small>Product price: {formatNumber(total)}</small></p>
          <p><small>Shipping: {formatNumber(shipping)}</small></p>
          <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
          <p>Total Price: {formatNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;