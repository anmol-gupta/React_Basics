import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';

const cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js useEffect');
    },[]);
    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "2px groove blue",
        padding: "8px"
      };
    return (
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{props.title}</h1>
        </header>
        <button style={style} onClick={props.toggled}>
          Press Me
        </button></div>
    )
}

export default React.memo(cockpit);