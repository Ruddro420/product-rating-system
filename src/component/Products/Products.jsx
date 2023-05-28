import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    // Fetch Data from json file
    useEffect(() => {
        fetch('../../../tshirt.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="products-container">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;