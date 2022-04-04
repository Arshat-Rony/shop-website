import React from 'react';
import useReviews from '../../hooks/useReviews';
import Singlereview from '../SingleReview/Singlereview';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='reviews'>
            {
                reviews.map(review => <Singlereview key={review.id} review={review}> </Singlereview>)
            }
        </div>
    );
};

export default Reviews;