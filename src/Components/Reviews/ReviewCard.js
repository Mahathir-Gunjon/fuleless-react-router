import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    return (
        <div>
            <div className="flex justify-between my-2 md:my-10 card-info">
                <div className="w-52 h-52 mr-3 md:mr-10">
                    <img className='object-cover w-full rounded-full' src={review.picture} alt="" />
                </div>
                <div className="flex flex-col justify-between">
                    <h3 className='text-2xl font-semibold text-gray-900 mb-2'>{review.name}</h3>
                    <div className='my-3'>
                        <p className='text-xl text-gray-800'>{review.review}</p>
                        <p className='text-2xl text-red-700'>Rating: {review.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;