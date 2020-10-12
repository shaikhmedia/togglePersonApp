import React from 'react';
import Person from './Person/Person'

const persons = props => {
    return (
        props.persons.map((person, index) => {
            return <Person 
            update={(event) => props.update(event, person.id)}
            delete={() => props.delete(index)}
            name={person.name}
            age={person.age}
            key={person.id}/>
        })
    )
};

export default persons;
