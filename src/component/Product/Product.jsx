/* eslint-disable react/prop-types */
import Rating from '../Rating/Rating';
import './Product.css'
const Product = ({ product,ratingHandler,starStyle }) => {
    const {_id, price, picture, name } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" className='product-img' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <Rating 
                        ratingHandler={ratingHandler}
                        productId={_id}
                        starStyle={starStyle}
                        ></Rating>
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