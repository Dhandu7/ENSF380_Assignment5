import React, { useState } from 'react';
import './styles.css';

const ProductItem = ({ id, name, price, image, description, onAddToCart }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    const handleAddToCart = () => {
        // Call the onAddToCart function passed from the parent component
        onAddToCart({ id, name, price, image });
    };


    return (
        <div className="product-item">
            <img src={image} alt={name} style={{ width: '250px', height: '250px' }} />
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {showDescription && <p>{description}</p>}
        </div>
    );
};

export default ProductItem;