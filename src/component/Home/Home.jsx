import { useContext } from "react";
import Products from "../Products/Products";
import './Home.css'
import { ShareContext } from "../../context/ProductContext";
const Home = () => {
    const { ratingArr } = useContext(ShareContext);
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
                    <div className="rating-data">
                        {

                            ratingArr?.map((data, i) =>
                                <div key={i}>
                                    <div className="alert alert-success shadow-lg m-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span><b>Name: </b> {data.name}</span>
                                            <span><b>Rating: </b> {data.rating} Star</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;