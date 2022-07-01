import React, {useContext} from 'react';
import {FrontistirioContext} from "./contexts/FrontistirioContext";

const Testmyass = () => {  
    const {frontistirios} = useContext(FrontistirioContext);
    return ( 
        <div>
        {frontistirios.map((ff) => (
            <div key={ff.id} className="col-lg-4">
                <p>
                    { ff.name }
                </p>
            </div>
            ))
        }
        </div>    
     );
}
 
export default Testmyass;