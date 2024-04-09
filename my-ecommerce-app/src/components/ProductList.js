import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';

const ProductList = ({ onAddToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;