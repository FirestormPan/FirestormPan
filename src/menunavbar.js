import React, {useState} from "react";
import PopUp from './PopUp.js';
import AuthenticatedContextProvider from "./contexts/AuthenticatedContext.js";

const Menunavbar = () => {

  let [showPopUp, setShowPopUp] = useState(false);

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          FindFront
        </a>        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <i className="fas fa-home"></i> Home{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#"  onClick={() => {setShowPopUp(true)}} >Popup </a>             
            </li>
            {
              //it doesn't appear in the navbar, it is just the thing that is poping up
            }
            <AuthenticatedContextProvider>
              <PopUp 
              show={showPopUp}
              onClickOutside={() => {setShowPopUp(false)}}
              />
            </AuthenticatedContextProvider>            
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tool
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
               </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>


          <ul className="navbar-nav mt-2 mt-md-0">
            <li className="nav-item">
              <a href="#" onClick={() => {setShowPopUp(true)}}>
                <i className="fas fa-sign-in-alt"></i> Log In
              </a>
            </li>
            <li>
              <a href="#" onClick={() => {setShowPopUp(true) }}>
                <i className="fas fa-user-edit"></i>Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    ); 
}

export default Menunavbar;
