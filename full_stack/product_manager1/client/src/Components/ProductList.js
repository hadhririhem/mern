import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {productList, setProductList} = props;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    return (
        <div>
            {
                productList.map((product, index)=>{
                return (
                    <div key={index}>
                        <Link to={`/product/${product._id}`} >
                            {product.title}
                        </Link>
                    </div>

                )
                })
            }
        </div>
    )
}
export default ProductList;



