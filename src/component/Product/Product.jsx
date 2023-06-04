/* eslint-disable react/prop-types */
import { useContext, useMemo } from 'react';
import './Product.css'
import { ShareContext } from '../../context/ProductContext';
import { FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
const Product = ({ product }) => {

    // Distructure code from product
    const { _id, price, picture, name } = product;
    //
    const { ratingArr, setRatingArr } = useContext(ShareContext)

    const ratingHandler = (star) => {
        // Make a object for Store Data
        const ratingObj = { id: _id, name:name, rating: star }
        // Set Array Of Object
        setRatingArr((prev) => {
            localStorage.setItem("store-data", JSON.stringify([...prev, ratingObj]))
            return ([...prev, ratingObj])
        })
    }
    // Rating Data Collect
    const ratingCount = useMemo(() => {
        const selected = ratingArr.find((data) => data.id === _id)
        return selected?.rating ? selected?.rating : 0
    }, [_id, ratingArr])
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" className='product-img' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <Rating
                            initialRating={ratingCount}
                            emptySymbol={<FaRegStar style={{ background: 'rgb(255, 196, 1)', padding: '5px', margin: '10px', borderRadius: '5px' }} size={30} />}
                            fullSymbol={<FaRegStar style={{ background: 'green', color: 'white', padding: '5px', margin: '10px', borderRadius: '5px' }} size={30} />}
                            onChange={(rate) => ratingHandler(rate)}
                            readonly={ratingCount}
                            stop={10}
                        />
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Price: ${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;