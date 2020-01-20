import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {
  state = {
    persons: [
      { id: "sasdsa", name: "Anmol Gupta", age: 22 },
      { id: "svcx", name: "Aastha Bubber", age: 23 },
      { id: "das", name: "Dumpy Gupta", age: 22 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit toggled={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
