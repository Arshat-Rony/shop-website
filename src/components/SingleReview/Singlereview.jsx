import React from 'react';
import './Singlereview.css'
const Singlereview = ({ review }) => {
    return (
        <div>
            <div className='singlereview'>
                <img src={review.picture} alt="" />
                <h3>Name : {review.name}</h3>
                <p>Rating : {review.rating}</p>
                <p>{review.reviews}</p>
            </div>
        </div>
    );
};

export default Singlereview;