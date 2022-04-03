import useReviews from "../../Hooks/useReviews";
import ReviewCard from "./ReviewCard";
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className="background-img">
            <div className="w-10/12 mx-auto">
                <h2 className="md:text-6xl text-4xl text-gray-200 pt-10 text-center">Few words our customers said <small>({reviews.length})</small></h2>
            </div>
            <div className="w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        reviews.map(review => <ReviewCard
                            key={review.id}
                            review={review}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;