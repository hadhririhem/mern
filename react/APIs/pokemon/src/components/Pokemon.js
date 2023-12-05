import React, { useState, useEffect} from "react";
import axios from "axios";

const Pokemon = (props) => {
    const [pokemon, setPokemon ] = useState([]);

    useEffect(  () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                setPokemon(response.data.results);
        })  .catch(err=>{
                console.log(err);
        }) 
    }, [] )

        return (
            <div>
                { pokemon.map( (pokemonObj, index) => {
                    return (
                        <ul > 
                            <li key={index}> {pokemonObj.name} </li>
                        </ul>
                    )
                })}
            </div>
        )
};


export default Pokemon; 