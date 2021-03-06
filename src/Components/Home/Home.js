import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../Reviews/ReviewCard';

const Home = () => {
    const [reviews] = useReviews();
    const reviewLimit = reviews.slice(0, 3)
    return (
        <section>
            <div className='bg-gradient-to-r from-gray-900 to-red-900 md:py-44 py-5'>
                <div className="w-10/12 md:7/12 py-20 grid grid-cols-1 md:grid-cols-2 mx-auto">
                    <div className='text-gray-50 w-full order-2'>
                        <h1 className="md:text-6xl text-4xl md:my-7 my-3">Tesla Model <span className='text-red-900 font-bold'>3</span></h1>
                        <p className='md:text-xl to-slate-300'>Model 3 comes with the option of dual motor all-wheel drive, 20” Uberturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.</p>
                        <button type="button" className="py-3 px-4  my-10 text-white shadow-xl font-semibold rounded bg-gradient-to-r from-red-400 to-red-900 hover:from-red-600 hover:to-red-800 ...">
                            <Link to='/reviews'>Check Reviews</Link>
                        </button>
                    </div>
                    <div className='w-full mx-auto md:order-2'>
                        <img className="w-full" src='https://www.pngkey.com/png/full/195-1956528_tesla-model-s-png.png' alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-900">

                <div className="py-5 md:w-6/12 w-11/12 mx-auto ">
                <h1 className="md:text-4xl text-3xl md:my-7 my-3 text-gray-50">Reviews from customers<span className='text-gray-50 font-bold'>(3)</span></h1>
                    <div>
                        {
                            reviewLimit.map(review =>
                                <ReviewCard key={review.id} review={review} />
                            )
                        }
                    </div>

                    <div className="w-full flex justify-end">
                        <button type="button" className="py-2 px-4 shadow-xl my-6 text-white font-semibold rounded bg-gradient-to-r from-red-400 to-red-900 hover:from-red-600 hover:to-red-800 ...">
                            <Link to='/reviews'>Check Reviews</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Home;