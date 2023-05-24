import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css'

const Products = () => {
    const [rating, setRating] = useState();
    const [getProductId,setProductId] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('../../../tshirt.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const ratingHandler = (star,productId) => {
        setRating(star)
        setProductId(productId)
        console.log(star,productId);
    }

    const starStyle = (star,productId) =>{
        return{
            background: star <= rating && getProductId === productId ? 'green' : 'rgb(255, 196, 1)',
            color: star <= rating && getProductId === productId ? 'white' : '',

        }
    }


    return (
        <div className="products-container">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                    setRating={setRating}
                    ratingHandler={ratingHandler}
                    starStyle={starStyle}
                ></Product>)
            }
        </div>
    );
};

export default Products;