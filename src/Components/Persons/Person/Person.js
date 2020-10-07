import React from 'react';
import Styles from './Person.module.css';

const person = (props) => {
    // Return JSX
    return (
    <div className={Styles.Person}>
        <p onClick={props.click}>Hi, I am {props.name} and I am {props.age} years old!</p>
        <input type='text' value={props.name} onChange={props.change}/>
    </div>
    )
}

export default person;



