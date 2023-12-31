import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {removeFromDom, productList, setProductList} = props;

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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                productList.map((product, index)=>{
                return (
                    <div key={index}>
                        <Link to={`/product/${product._id}`} >
                            {product.title}
                        </Link>
                        <Link to={`/edit/${product._id}`} >
                            edit
                        </Link>
                        <button onClick={(e) => {deleteProduct(product._id)}} > Delete </button>
                        
                    </div>

                )
                })
            }
        </div>
    )
}
export default ProductList;



