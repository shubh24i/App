import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
//import styled from "styled-components";

/* const StyledButton = styled.button`
  background-color: green;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`; */

class App extends Component {
  state = {
    persons: [
      { id: "e1", name: "Sanjay", age: 39 },
      { id: "e2", name: "Vinod", age: 35 },
      { id: "e3", name: "Rajesh", age: 45 },
    ],
    showPersons: false,
    inputText: "",
  };

  // Toggle button to show persons
  togglePersonsHandler = () => {
    const togglePersons = this.state.showPersons;
    this.setState({
      showPersons: !togglePersons,
    });
  };
  // Delete person handler
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // Name change handler

  changeNameHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });

    persons[personIndex].name = event.target.value;
    this.setState({
      persons: persons,
    });
  };

  inputChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  deleteCharHandler = (index) => {
    const inputText = this.state.inputText.split("");

    inputText.splice(index, 1);

    this.setState({ inputText: inputText.join("") });
  };

  render() {
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.key}
                changeName={(event) => {
                  this.changeNameHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    const personsLength = this.state.persons.length;

    if (personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working!!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
