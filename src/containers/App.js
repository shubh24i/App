import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          changeName={this.changeNameHandler}
          deletePerson={this.deletePersonHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          togglePersons={this.togglePersonsHandler}
          changeName={this.changeNameHandler}
          deletePerson={this.deletePersonHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          title={this.props.title}
        />
        {persons}
      </div>
    );
  }
}

export default App;
