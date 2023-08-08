import React, { Component , useEffect, useState } from "react";
import "./App.css";

//my components
import Menunavbar from "./menunavbar.js";
import FavoriteFronts from "./favouriteFronts.js";
import SearchBar from "./searchBar.js";
import Footer from "./Footer.js";
//import Frontistirio from "./ffTest";
//import SearchTutorial from "./searchFromTutorial(server).js";

//not working
import FrontistirioContextProvider from "./contexts/FrontistirioContext";
//local storage hook
//import useLocalStorage from "./hooks/useLocalStorage";

//images
import launching from "./images/4142115.jpg"
import spaceship from "./images/spaceship.jpg"
import aerorocket from "./images/aerorocket.png"
import bluestar from "./images/bluestar.jpg"
import skyguard_ship from "./images/skyguard_ship.jpg"

class App extends Component {
  state = {
    samplearray: [
      {
        id: 1,
        name: "Tower Rocket",
        region: "kalifornia",
        subjects: ["carbon", "mazut", "geofuel"],
        description: " You probably recognize this one from Star Warz",
        link:
          "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: aerorocket,
      },
      {
        id: 2,
        name: "Green Strike",
        region: "moon",
        subjects: ["carbon", "geofuel", "chemichal"],
        description: "Let us travel you through the stars! Captain included",
        link: "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: launching,
      },
      {
        id: 3,
        name: "Blue navigator",
        region: "moon",
        subjects: ["maths", "mazut", "lithium"],
        description: "Family cruizer for long trips to faraway planets!",
        link: "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: bluestar,
      },
      {
        id: 4,
        name: "Data Traveler",
        region: "sirakuses",
        subjects: ["carbon", "mazut", "lithium"],
        description: "An amazing spaceship for all needs!",
        link: "https://www.youtube.com/watch?v=K9IYp-2vP9U&ab_channel=Bcskoutalou",
        imagePath: spaceship,
       
      },
      {
        id: 5,
        name: "Sky Guard Traveler Cruiser",
        region: "moon",
        subjects: ["carbon"],
        description: "An old school spaceship from AQW skyguards!",
        link: "http://aqwwiki.wikidot.com/skyguard-cruiser",
        imagePath: skyguard_ship,
       
      },
    ],
    favouritesArray:  [],
  };
  
/*
  componentDidMount(){
    let link = "http://localhost:3000/" ;
    var gottenx;
    fetch(link).then( response => response.json()
    , (error) =>{ console.log(error) } 
    ).then(console.log( "reeeeeeee" , gottenx));
    
  }
*/
 
  addToFavourites = (addedFrontId) => {
   //ελεγχος αν υπαρχει το στοιχειο ηδη στο Favourites array    
    for(let i=0 ; i<this.state.favouritesArray.length ; i++){
      if(this.state.favouritesArray[i].id === addedFrontId){
        this.deleteFavourites(addedFrontId); //αν υπαρχει το διαγραφω
        return;
      }   
    }
    //εδω θα φτασει μονο εαν δεν εχει κανει return παραπανω
      var favorito = [...this.state.favouritesArray];
      this.state.samplearray.forEach((element) => {
        if (addedFrontId === element.id) 
          favorito.push(element);


         
      //to write in localstorage
      /*
      useEffect(() => {
         localStorage.setItem('favouriteFronts', JSON.stringify(localStorage.getItem("favouriteFronts").push(element)));
      }, [element]);
      */

      });
      this.setState({ favouritesArray: favorito });  
  };

  deleteFavourites = (addedFrontId) => {
    let newFavourites = this.state.favouritesArray.filter(
      (ff) => ff.id !== addedFrontId
    );
    this.setState({ favouritesArray: newFavourites });
  };

  isFavourited = (frontId) =>{    
     for(let i=0 ; i<this.state.favouritesArray.length ; i++) {
       if(this.state.favouritesArray[i].id === frontId)
         return true;  
      } 
     return false;
  }

  render() {
    return (
      <div className="App">
        <Menunavbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>


          <SearchBar
              fronts={this.state.samplearray}
              addToFavourites={this.addToFavourites}
              onDelete={this.deleteFavourites}
              isFavourited={this.isFavourited}
            />
       <FrontistirioContextProvider>
        {/* <Testmyass /> */}
        </FrontistirioContextProvider>  

        <br></br>
        <p>
          <cite>For a good trip, a good ship is required</cite>
        </p>
        <br></br>
        <label>Seaarch the most suitable Spaceship for you! Filter out to find the best solution for you. Easy fast and simple!
           Happy searching! 
        </label>


        <FavoriteFronts
          favouriteArray={this.state.favouritesArray}
          onDelete={this.deleteFavourites}
        />

        <Footer />
        
        {/*  */}
      </div>
    );
  }
}

export default App;
