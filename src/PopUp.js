import React, {useEffect, useRef, useState, useContext} from "react";
import {AuthenticatedContext} from "./contexts/AuthenticatedContext.js"
import "./popUp.css"

const Popup = props => {
  const ref = useRef(null);
  const { onClickOutside } = props;
  const {isAuthenticated} = useContext(AuthenticatedContext);
  const [view, setView] = useState(isAuthenticated ? "loggedIn" : "logIn"); //takes values logIn or signIn or loggedIn (if the user is already logged in)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  if(!props.show)
    return null;

  const viewContent = ( ) =>{
    switch (view) {
      case "loggedIn":  
        return(
          <div>
            <p>welcome user!</p>
            <button onClick={()=>{onClickOutside()}}>close</button>
            <button onClick={()=>{setView("logIn")}}>Log Out</button>
          </div>
        );
      case "logIn":
        return(
          <form>
            <input type={"text"} placeholder="name"></input>
            <input type={"text"} placeholder="password"></input>
            <input type={"submit"} onClick={ ()=>{setView("loggedIn")} }></input>
          </form>
        );  
      case "signUp":
        return(
          <form>
          <input type={"text"} placeholder="name"></input>
          <input type={"text"} placeholder="password"></input>
          <input type={"text"} placeholder="confirm password"></input>
          <input type={"submit"} onClick={ ()=>{setView("loggedIn")} }></input>
        </form>
        ); 
      default:
        break;
    } 
  }
  

  return (
    <div ref={ref} className='popup-box'>

          

          

        <div className="box">
          <h3 className="popUpTitle">{view}</h3>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={ ()=>{setView("logIn")} }> Log In </button>    
            <button type="button" className="btn btn-danger" onClick={ ()=>{setView("signUp")} }> Sign Up </button>
          </div>
          {viewContent()}        
        </div>
        <span className="close-icon" onClick={()=>{onClickOutside()}}>X</span>   
    </div> );
};

export default Popup;