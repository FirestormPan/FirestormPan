import React, { Component, useEffect, useState } from "react";
import "./favouriteFronts.css";

class FavouriteFronts extends Component {
  state = {
    open: false,
  };

  togglePanel = () => {
    this.setState({ open: !this.state.open });
  };

  titleStyle() {
    var classeMas = "header";
    if (this.props.favouriteArray.length ) {
      classeMas += "NonEmpty";
    } else {
      classeMas += "Emptyness";
    }
    return classeMas;
  }

  render() {
    return (
      <div className="wrapperForThisBullshitCrap">
        <div onClick={this.togglePanel} className={this.titleStyle()}>
          Favourited Fronts:{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.favouriteArray.length}
          </span>
        </div>
        {this.state.open ? ( 
          <div className="content">
            { !this.props.favouriteArray.length ? (<i>"to save a front as favourite, click on the star button"</i>)  : (  
            <ol>
              {this.props.favouriteArray.map((ff) => (
                <li key={ff.id}>
                  <button
                    onClick={() => {
                      this.props.onDelete(ff.id);
                    }}
                  >
                    DElete
                  </button>{" "}
                  onoma: {ff.name} <a href={ff.link}>page</a> <br></br>{" "}
                  description:{ff.description} <hr></hr>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                </li>
              ))}
            </ol>
            ) }
          </div>
        ) : null }
      </div>
    );
  }
}

export default FavouriteFronts;
