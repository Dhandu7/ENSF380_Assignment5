import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import reviewsData from '../data/reviews';

const HomeMainSection = () => {
    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        const getRandomReviews = () => {
            const randomIndexes = [];
            while (randomIndexes.length < 2) {
                const randomIndex = Math.floor(Math.random() * reviewsData.length);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                }
            }
            return randomIndexes.map(index => reviewsData[index]);
        };
        setRandomReviews(getRandomReviews());
    }, []);

    return (
        <div className="main">
            <section className="about-us">
                <h2 className = "about-title">About Us</h2>
                <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
                <Link to="/products"><button>Shop Now</button></Link>
            </section>
            <section className="customer-reviews">
                <h2>Customer Reviews</h2>
                <div>
                    {randomReviews.map((review, index) => (
                        <div key={index} className="review">
                            <p>{review.customerName}</p>
                            <p>{review.reviewContent}</p>
                            <div className="rating">
                              <p>Rating: {[...Array(review.stars)].map((star, index) => (<span key={index}>⭐</span>))}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomeMainSection;

