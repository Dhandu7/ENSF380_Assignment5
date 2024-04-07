import React from 'react';
import './styles.css';

const CartItem = ({ item, removeFromCart }) => {
    const total = item.quantity * item.price;

    const removeItem = () => {
        if (item.quantity === 1) {
            removeFromCart(item);
        } else {
            removeFromCart({ ...item, quantity: item.quantity - 1 });
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} style={{ width: '250px', height: '250px' }} />
            <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${total}</p>
                <button onClick={removeItem}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;

