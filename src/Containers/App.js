import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import Styles from '../Cockpit/Cockpit.module.css';

// State Management in class based component
class App extends Component {
  // Default state
  state = {
    persons: [
      {id: '1', name: 'Max', age: 26},
      {id: '2', name: 'Manu', age: 28},
      {id: '3', name: 'Gandu', age: 33}
    ],
    showPersons: false
  };

  // Update details changing state
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Alamin', age: 26},
        {name: 'Rubel', age: 28},
        {name: 'Arif', age: 33}
      ]
    })
  };

  // Delete person
  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,  1);
    this.setState({persons: persons})
  }

  // Update person's name
  updateNameHandler = (event, id) => {
    // Get the index of the person
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    // Get the copy of the person whose input is clicked
    const person = {...this.state.persons[personIndex]}
    
    // Update person name with input value
    person.name = event.target.value;

    // Create a copy of the original persons array
    const persons = [...this.state.persons];
    
    // Update the person whose input is clicked with new updated person
    persons[personIndex] = person;

    // Set the state to new persons array
    this.setState({persons: persons})
  };

  // Toggling persons
  togglePersonsHandler = () => {
    // Altering the default state boolean
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  // Rendering to components to DOM
  render () {
    // Setting persons to null when showPersons is false
    let person = null;

    // When showPersons is true
    if(this.state.showPersons) {
      // Map through the persons array and use Person component for each
      person = <Persons
        persons={this.state.persons}
        delete={this.deleteNameHandler}
        update={this.updateNameHandler}/>
    };

    // Return the JSX
    return (
      <div className="App">
        {/* Cockpit JSX */}
        <Cockpit 
        togglePersons = {this.togglePersonsHandler}
        showPersons = {this.state.showPersons}/>

        {/* Persons JSX */}
        {person}
      </div>
    );
  };
};

export default App;
