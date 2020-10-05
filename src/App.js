import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

// // State Management in function based component
// const App = () => {
//   // Setting default state
//   const [personsState, setPersonsState] = useState({
//     // Default person State
//     persons: [
//       {name: 'Max', age: 26},
//       {name: 'Manu', age: 28},
//       {name: 'Gandu', age: 33}
//     ]
//   });

//   // Changing the state
//   const switchNameHandler = () => {
//     // Overwriting the default state
//     setPersonsState({
//       persons: [
//         {name: 'Alamin', age: 26},
//         {name: 'Rubel', age: 28},
//         {name: 'Arif', age: 33}
//       ]
//     })
//   };

//   // Changing the state updating name value by input
//   const updateNameHandler = (e) => {
//     setPersonsState({
//       persons: [
//         {name: 'Max', age: 26},
//         {name: e.target.value, age: 28},
//         {name: 'Gandu', age: 33}
//       ]
//     })
//   };

//   // Return the JSX to print details on DOM
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <button onClick={switchNameHandler}>Change Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobby: Racing</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobby: Gaming
//       <input type="text" onChange={updateNameHandler}></input>
//       </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobby: Biking</Person>
//     </div>
//   );
// };

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
    let persons = null;
    let button;

    // When showPersons is true
    if(this.state.showPersons) {
      persons = <div>
        {this.state.persons.map((person, index) => {
          return <Person
          change = {(event) => this.updateNameHandler(event, person.id)}
          click = {() => this.deleteNameHandler(index)}
          name = {person.name} 
          age = {person.age} 
          key = {person.id}
          />
        })}
      </div>
      button = <button className='button red' onClick={this.togglePersonsHandler}>Hide Persons</button>
    } else {
      button = <button className='button' onClick={this.togglePersonsHandler}>Show Persons</button>
    };

    // Return the JSX
    return (
      <div className="App">
        {/* Title */}
        <h1>Person Toggle App</h1>

        {/* Button */}
        {button}

        {/* Persons JSX */}
        {persons}
      </div>
    );
  };
};

export default App;
