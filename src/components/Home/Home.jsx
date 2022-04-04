import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import img from "../../images/phone.jpg"
import Reviews from '../Reviews/Reviews';
import Singlereview from '../SingleReview/Singlereview';
import "./Home.css"

const Home = () => {
    const [reviews, setReviews] = useReviews()
    let homeReview = reviews.slice(0, 3)
    const navigate = useNavigate()
    const goReivew = () => {
        navigate('/reviews')
    }
    console.log(reviews)
    return (
        <div className="section">
            <div className='home'>
                <div className="home-detail">
                    <h1>Dokan always <br /> offer <span className='best'>Best Product</span></h1>
                    <h2>Choose Whatever your Choice</h2>
                    <p> laptop is a small personal computer.we have designed to be more portable than traditional desktop computers, with many of the same abilities. All folded and normal laptops are here for transportation and have a built-in keyboard and touchpad.</p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className="home-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="reviews-container">
                <h1 className='review-heading'>Our Reviews</h1>
                <div className="reviews">

                    {
                        homeReview.map(review => <Singlereview key={review.id} review={review}></Singlereview>)

                    }
                </div>
                <button onClick={() => goReivew()} className='demo-btn'> See All Reiviews</button>
            </div>
        </div>
    );
};

export default Home;