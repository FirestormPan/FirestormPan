import React, { Component , useEffect, useState } from "react";
import "./App.css";

//import Frontistirio from "./ffTest";
//import SearchTutorial from "./searchFromTutorial(server).js";
import Menunavbar from "./menunavbar.js";
import FavoriteFronts from "./favouriteFronts.js";
import SearchBar from "./searchBar.js";
import FrontistirioContextProvider from "./contexts/FrontistirioContext";
import Testmyass from "./Testmyass.js";
//local storage hook
//import useLocalStorage from "./hooks/useLocalStorage";
import Footer from "./Footer.js";

class App extends Component {
  state = {
    samplearray: [
      {
        id: 1,
        name: "front1",
        region: "kalifornia",
        subjects: ["maths", "chemistry", "physics"],
        description:
          "eimaste kaloi nai nai alh8ia sas lew! Exoume papies kai xrysa abga! Na kerasw mia kerasopita re mpaglama h eisai akatadextos",
        link:
          "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: "logokaikala.png",
      },
      {
        id: 2,
        name: "frontistirio2",
        region: "moon",
        subjects: ["maths", "chemistry", "physics"],
        description: "eimaste kaloi nai nai alh8ia sas lew!",
        link: "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: "logokaikala.png",
      },
      {
        id: 3,
        name: "frontistiriaki3",
        region: "moon",
        subjects: ["maths", "latin", "geography"],
        description: "eimaste kaloi nai nai alh8ia sas lew!",
        link: "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: "logokaikala.png",
      },
      {
        id: 4,
        name: "front4",
        region: "sirakuses",
        subjects: ["maths", "chemistry", "physics"],
        description: "eimaste kaloi nai nai alh8ia sas lew!",
        link: "https://www.youtube.com/watch?v=8okED1SIvBQ&ab_channel=InnerEarRec",
        imagePath: "logokaikala.png",
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

        <FrontistirioContextProvider>
        {/* <Testmyass /> */}
          <SearchBar
              fronts={this.state.samplearray}
              addToFavourites={this.addToFavourites}
              onDelete={this.deleteFavourites}
              isFavourited={this.isFavourited}
            />
        </FrontistirioContextProvider>  

        <br></br>
        <p>
          <cite>Για ενα Καλο ταξιδι χρειαζεται το καταληλο πλοιο</cite>
        </p>
        <br></br>
        <label>Αναζητήστε το καταληλο φροντιστήριο για εσας! Βάλε τα κατάληλα φίλτρα και βρες την καλύτερη επιλογή για εσένα. Εύκολα γρήγορα 
          και απλά! Ενας πλήρης κατάλογος με όλους μας τους συνεργάτες. Καλή αναζήτηση!
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
