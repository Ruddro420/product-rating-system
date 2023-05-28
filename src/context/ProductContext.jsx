/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const ShareContext = createContext(null);

const ProductContext = ({ children }) => {
    const [ratingArr, setRatingArr] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("store-data"))
        setRatingArr(localData ? localData : []);
    }, [])
    
    const data = { setRatingArr, ratingArr }
    return (
        <ShareContext.Provider value={data}>
            {children}
        </ShareContext.Provider>
    );
};

export default ProductContext;