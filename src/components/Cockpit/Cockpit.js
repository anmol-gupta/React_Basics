import React, { useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    // toggleBtnRef.current.click(); This will give error as react is not get a chance to assign a ref in the button.
    //So here we use this in useEffect as we know useEffect will run after every render cycle.
    useEffect(() => {
        toggleBtnRef.current.click();
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
        <button ref={toggleBtnRef} style={style} onClick={props.toggled}>
          Press Me
        </button>
        <AuthContext.Consumer>
            {
                context => <button onClick={context.login}>Log In</button>
            }
        
        </AuthContext.Consumer>
        
        </div>
    )
}

export default React.memo(cockpit);