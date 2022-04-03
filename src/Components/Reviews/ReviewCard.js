import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
            <div className="flex justify-between card-info">
                    <div className="w-16 h-16">
                        <img src={review.picture} alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className='text-xl font-semibold text-white mb-3'></h3>
                        <div className='flex card-info'>
                            <p className='text-xs text-gray-100'></p>
                            <span className='mx-3 text-xl text-indigo-800'>|</span>
                            <p className='text-xs text-gray-100'></p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReviewCard;