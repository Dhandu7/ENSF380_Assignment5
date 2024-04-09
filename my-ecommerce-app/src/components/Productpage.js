import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import './styles.css';

const Productpage = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.map(item => item.id === product.id ? {...item, quantity: item.quantity - 1} : item).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList onAddToCart={addToCart} /></td>
                    <td style={{verticalAlign: 'top'}}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;

