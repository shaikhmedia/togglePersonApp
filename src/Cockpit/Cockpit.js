import React from 'react';

const cockpit = (props) => {

    return (
        <div>
            <h1>Person Toggle App</h1>
            <button className='button' style={props.style} onClick={props.togglePersons}>{props.buttonText}</button>
        </div>
    )
};

export default cockpit