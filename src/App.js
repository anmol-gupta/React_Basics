import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person /Person';

class App extends Component {

  state = {
    persons : [
      {name : 'Anmol Gupta', age : 22},
      {name : 'Aastha Bubber', age: 23},
      {name : 'Dumpy Gupta', age: 22}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("Was Clicked!");
    this.setState({
      persons : [
        {name : newName, age : 22},
        {name : 'Aastha Bubber', age: 23},
        {name : 'Ayushi Gupta', age: 26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name : event.target.value, age : 22},
        {name : 'Aastha Bubber', age: 23},
        {name : 'Ayushi Gupta', age: 26}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px groove blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button style={style} onClick={() => this.switchNameHandler('CoderAnmolGupta')}>Press Me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler}/>
        {/* <Person name="Aastha Bubber" age="23">She is very intelligent and beautiful.</Person> */}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'RichAnmolGupta')}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
