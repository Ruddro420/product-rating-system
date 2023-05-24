import Products from "../Products/Products";
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="heading">
                <h1>Welcome To, Product Rating Sytem</h1>
            </div>
            <div className=" main-container">
                <div className="product-show">
                    <Products></Products>
                </div>
                <div className="rating-show">
                    <div className="rating-heading">
                        <h1>Rating</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;