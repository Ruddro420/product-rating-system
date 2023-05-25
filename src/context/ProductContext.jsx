/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const ShareContext = createContext();

const ProductContext = ({children}) => {
    const [ratingArr, setRatingArr] = useState([]);
    // For Duplicate Data
    const [productExits,setProductExits] = useState(false);

    const data = {setRatingArr,ratingArr,setProductExits,productExits}
    return (
        <div>
            <ShareContext.Provider value={data}>
                {children}
            </ShareContext.Provider>
        </div>
    );
};

export default ProductContext;