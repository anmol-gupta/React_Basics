import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        console.log('Person.js rendering...');
    // return [
    //         <p key="i1" onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}!</p>,
    //         <p key="i2">{this.props.children}</p>,
    //         <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
    //    ];
       //here we are rendering adjacent jsx elements which is usually not allowed.
       //Another Method
    return (
        <Aux> {/*We can also use React.Fragment here. It is a built in Aux in REACT*/}
             <p key="i1" onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}!</p>
             <p key="i2">{this.props.children}</p>
             <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>      
        </Aux>
    )
    }
};

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
}

export default Person;