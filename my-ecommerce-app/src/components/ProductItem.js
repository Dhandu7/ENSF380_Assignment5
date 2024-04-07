import React, { useState } from 'react';
import './styles.css';

const ProductItem = ({ product, addToCart }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleMouseEnter = () => {
        setShowDetails(true);
    };

    const handleMouseLeave = () => {
        setShowDetails(false);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '250px' }} />
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {showDetails && <p>{product.description}</p>}
        </div>
    );
};

export default ProductItem;