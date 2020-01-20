import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person /Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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

  nameChangedHandler = (event,id) => {
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px groove blue",
      padding: "8px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
              <Person
                click={() => {
                  this.deletePersonHandler(index);
                }}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              /></ErrorBoundary>
            );
          })}
          ;
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button style={style} onClick={this.togglePersonsHandler}>
          Press Me
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
