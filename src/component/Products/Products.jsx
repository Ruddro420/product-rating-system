import { useContext, useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css'
import { ShareContext } from "../../context/ProductContext";
import { toast } from "react-hot-toast";

const Products = () => {
    const [rating, setRating] = useState();
    const [getProductId, setProductId] = useState('');
    const [products, setProducts] = useState([]);
    // Store Rating
    const { ratingArr, setRatingArr} = useContext(ShareContext)
    //Update Rating
    console.log(ratingArr);

    useEffect(() => {
        fetch('../../../tshirt.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const ratingHandler = (star, productId) => {
        setRating(star)
        setProductId(productId)


        const getClickedProduct = products.find(findProduct => findProduct._id === productId)

        const checkProduct = ratingArr.some(d => d.id === getClickedProduct._id)

        if (checkProduct) {
            toast.error("You have already rate this product");
        }
        else {
            // Product Object
            const ratingObj = { id: getClickedProduct._id, name: getClickedProduct.name, rating: star }
            setRatingArr([...ratingArr, ratingObj])
        }





    }

    // Start Style
    const starStyle = (star, productId) => {
        return {
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