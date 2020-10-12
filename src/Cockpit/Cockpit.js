import React, {useEffect, useRef} from 'react';
import Styles from './Cockpit.module.css'

const cockpit = props => {
    let buttonClases = [Styles.button];
    let buttonText = 'Show Persons';

    if(props.showPersons) {
        buttonClases.push(Styles.red);
        buttonText = 'Hide Persons'
    }

    return (
        <div>
            <h1>Person Toggle App</h1>
            <button 
            className={buttonClases.join(' ')} 
            onClick={props.togglePersons}>
            {buttonText}
            </button>
        </div>
    )
};

export default cockpit;