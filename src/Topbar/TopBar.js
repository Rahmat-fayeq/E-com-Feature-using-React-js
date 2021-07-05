import React from 'react';
import classes from './TopBar.module.css';
const Topbar = () =>{
    return(
        <header className="App-header">
            <nav className={classes.Topbar}>
            <img src='amazonLogo.png' alt="Amazon Logo"/>
            </nav>
       </header>
    );
}
export default Topbar;