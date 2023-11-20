import React, {useState} from 'react';

const Person = (props) => {
    const [age, setAge] = useState(props.age);
    const increase = () =>  {
        setAge(age + 1);
    }
    return (
        <div>
            <h3> {props.lname}, {props.fname}   </h3>
            <p>Age : {age} </p>
            <p> Hair color : {props.haircolor} </p>
            <button onClick={ increase }>Birthday Button for {props.lname} {props.fname} </button>
        </div>
    )
}

export default Person