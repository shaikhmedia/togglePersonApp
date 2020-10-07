import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
    return <Person
    change = {(event) => props.update(event, person.id)}
    click = {() => props.delete(index)}
    name = {person.name} 
    age = {person.age} 
    key = {person.id}/>
  })

export default persons;