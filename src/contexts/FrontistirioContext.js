import React, {createContext , useReducer, useState} from 'react';
import { favouriteReducer } from '../reducers/favouriteReducer';

export const FrontistirioContext = createContext();

const FrontistirioContextProvider = (props)=>{

    const [frontistirios, setFrontistirios] = useState([
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
            }
        ]); 

   /* const [favourites, dispatch] = useReducer(
        favouriteReducer,[]
    )    
    //, favourites, dispatch
    */

    return(
      <FrontistirioContext.Provider value={{frontistirios}}>
        {props.children}
      </FrontistirioContext.Provider>
    );
}

export default FrontistirioContextProvider;