import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Update = (props) => { 
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description) 
            })
            .catch(err => console.log(err))
    }, [])


    const onSubmit = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/edit/' + id, {
            title,   
            price,
            description
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                navigate('/');
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div> 
            <h3> Edit page </h3>
            <form onSubmit={onSubmit}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price </label><br/>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label> Description </label> <br/>
                    <input type='text' onChange={(e) => setDescription(e.target.value) } />
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Update;