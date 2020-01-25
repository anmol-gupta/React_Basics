import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js contructor");
  }

  state = {
    persons: [
      { id: "sasdsa", name: "Anmol Gupta", age: 22 },
      { id: "svcx", name: "Aastha Bubber", age: 23 },
      { id: "das", name: "Dumpy Gupta", age: 22 }
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    console.log("[App.js] render");
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
      <WithClass classes="App">
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <Cockpit
            persons={this.state.persons}
            title={this.props.appTitle}
            toggled={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
