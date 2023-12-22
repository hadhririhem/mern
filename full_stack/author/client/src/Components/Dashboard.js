import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const AuthorList = (props) => {
    const {removeFromDom,authorList , setAuthorList} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h3> Favorite Authors</h3>
            <Link to={`/createauthor`} >
                Add an author
            </Link>
            {
                authorList.map((person, index)=>{
                return (
                    <div key={index}>
                        <p> {person.firstName} {person.lastName}  </p> 
                        <Link to={`/author/${person._id}`} >
                            edit
                        </Link>
                        <button onClick={(e) => {deleteAuthor(person._id)}} > Delete </button>
                        
                    </div>

                )
                })
            }
        </div>
    )
}
export default AuthorList;

