import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    return (
        <div>
            <div className="md:flex justify-between my-2 md:my-10 card-info shadow-xl">
                <div className="mr-3 md:mr-10">
                    <img className='img-sizing' src={review.picture} alt="" />
                </div>
                <div className="flex flex-col justify-between">
                    <h3 className='text-2xl font-semibold text-gray-900 mb-2'>{review.name}</h3>
                    <div className='my-3'>
                        <p className='text-xl text-gray-800'>{review.review}</p>
                        <br />
                        <div className="flex">
                            <p className='text-xl text-gray-700'>Rating: {review.rating} </p>
                            <div className="w-7 h-7">
                                <span className='text-yellow-400 text-xl w-full'><StarIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;