import React, {useState} from "react";
import ProductForm from "../Components/ProductForm";
import ProductList from "../Components/ProductList";


const Main = (props) => {
    const [productList, setProductList] = useState([]); 
    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id !== productId)); 
    }

    return (
        <div>
            <ProductForm productList = {productList} setProductList= {setProductList} />
            <ProductList removeFromDom={removeFromDom} productList={productList} setProductList={setProductList} /> 
        </div>
    )
}

export default Main; 