import React, { Component } from "react";
//import { useMemo } from "react";
import Select from "react-select";
//react-select-me , installed
import Frontistirio from "./ffTest";
import "./search.css";
//import { push } from "core-js/fn/array";

class SearchBar extends Component {
  state = {
    inputNameValue: "",
    inputRegionValue: "all",
    SubjectsValue: [],
    sortValue: "",
  };

  frontSetOnChange = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };

  handleRegionChoice = (event) => {
    console.log(event)
    this.setState({ inputRegionValue: event.value });
  };

  handleSubjectsChoice = (event) => {
    let neval=[]; //array for the new values
    if (event !== null) { // κανω τον ελεγχο για την περιπτωση που η μπαρα μεινει αδεια. οταν ειναι αδεια λαμβανω τιμη null και δε θελω να ανει τπτ γτ μπαγκαρει αλλιως
      neval = event.map((element) => //map vs forEach, το map εχει καλυτερο performance 
        element.value
      );
    }
    this.setState({ SubjectsValue: neval });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleSearchBarFilter = (nameValue) =>{
   return  (nameValue.toLowerCase().includes(this.state.inputNameValue.toLowerCase()) );
  }

  handleRegionFilter = (regionValue)=>{
    return(this.state.inputRegionValue === "all" ||  this.state.inputRegionValue === regionValue)
  }

  handleSubjectsFilter = (frontsSubjects) => {
    if(this.state.SubjectsValue.includes("all")) return true;

    for(let i=0; i<frontsSubjects.length; i++) {
      if (this.state.SubjectsValue.includes(frontsSubjects[i])) {
        return true;
      } 
    }
  };

  render() {
    const options = [
      { value: "all", label: "All subjects" },
      { value: "maths", label: "Maths" },
      { value: "physics", label: "physics" },
      { value: "geography", label: "geography" },
      { value: "chemistry", label: "chemistry" },
      { value: "latin", label: "latin" },
    ];

    var filteredFronts = this.props.fronts.filter((ff) => {
      //πρεπει να ειναι true ολες οι συνθηκες
      return (
        this.handleSearchBarFilter(ff.name) &&
        this.handleRegionFilter(ff.region)&&
        this.handleSubjectsFilter(ff.subjects)
      );
    });

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h1>A complete catalogue of Our fronts</h1>

        <h4>
          <i className="fas fa-search"></i>
          {"Αναζήτηση "}
        </h4>

        <form
          onSubmit={
            this.handleSubmit
          } /*mporei kai na afaire8ei otan bgalw to submit button*/
        >
          <input
            type="text"
            placeholder="Όνομα φροντιστηρίου"
            value={this.state.inputNameValue}
            onChange={this.frontSetOnChange}
          />
          <br></br>
          <br></br>
          <input className="searchButton" type="submit" value="Submit" />{" "}
          {/* διαγραφη*/}
        </form>
       
        <div className="container-fluid">
      <div className='row'>
        <div  className="col-lg-4">
          <Select
            className="selctMultipleValues"
            placeholder="Περιοχη"
            options= {[
                    { value: "all", label: "All regions" },
                    { value: "kalifornia", label: "Kalifornia" },
                    { value: "sirakuses", label: "Sirakuses" },
                    { value: "moon", label: "moon" },
               ]} 
           //defaultValue={}
           onChange={this.handleRegionChoice}
          />
    </div>

     <div  className="col-lg-4">
          <Select
            className="selctMultipleValues"
            placeholder="Μαθήματα"
            options={options}
           //defaultValue={options[0]}
            isMulti
            onChange={this.handleSubjectsChoice}
          />
          </div>
     </div>  
    </div>    


        <div className="container-fluid"> {/*display τα αποτελεσματα*/}
          <div className="row ">
            {filteredFronts.map((ff) => (
              <div key={ff.id} className="col-lg-4">
                <Frontistirio
                  onFavoutited={this.props.addToFavourites}
                  isFavourited={this.props.isFavourited}
                  frontistiriou={ff}

                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    );
  }
}
export default SearchBar;
