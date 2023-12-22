import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {

    const navigate = useNavigate();
    const {authorList, setAuthorList} = props; 

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            firstName,   
            lastName,
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setAuthorList([...authorList, res.data]);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.res.data.err.errors);
                setErrors(err.res.data.err.errors);
    }); }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name : </label><br/>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </p>
            <p>
                <label>Last Name : </label><br/>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </p>
            <input type="submit"/>
        </form>
    )
}
export default AuthorForm;
