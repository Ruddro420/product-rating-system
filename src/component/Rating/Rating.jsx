/* eslint-disable react/prop-types */

import './Rating.css'
import { FaRegStar } from 'react-icons/fa';
const Rating = ({ ratingHandler, productId, starStyle }) => {
    //For Hover
    const starArry = [1, 2, 3, 4, 5];

    return (
        <div className='rating-container'>
            {
                starArry.map((star, i) =>
                    <div key={i} >
                        <button
                            style={starStyle(star, productId)}
                            type='button'
                            onClick={() => ratingHandler(star, productId)}
                        >
                            <FaRegStar

                               /*  className={
                                    star <= rating ? "star-filled" : "star-empty"
                                } */ size={30} />
                        </button>
                    </div>

                )
            }

        </div>
    );
};

export default Rating;