import React, { useState, useEffect} from "react";

const Pokemon = (props) => {
    const [pokemon, setPokemon ] = useState([]);

    useEffect(  () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
            // not the actual JSON response body but the entire HTTP response
                return response.json();
        })  .then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
                setPokemon(response.results);
        })  .catch(err=>{
                console.log(err);
        }); }, [] )

        return (
            <div>
                { pokemon.map( (pokemon, index) => {
                    return (
                        <ul key={index}> 
                            <li> {pokemon.name} </li>
                        </ul>
                    )
                })}
            </div>
        )
};


export default Pokemon; 