import React from 'react';
import CartItem from './CartItem';
import './styles.css';

const Cart = ({ cart, removeFromCart }) => {
    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
            <p>Total (in cart): ${totalPrice}</p>
        </div>
    );
};

export default Cart;
