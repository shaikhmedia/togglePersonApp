import React from 'react';
import './Person.css';
import Radium from 'radium'

const person = (props) => {
    // Setting media query with Radium
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    // Return JSX
    return (
    <div className="Person" style={style} onClick={props.click}>
        <p>Hi, I am {props.name} and I am {props.age} years old!</p>
        <input type='text' value={props.name} onChange={props.change}/>
    </div>
    )
}

export default Radium(person);



