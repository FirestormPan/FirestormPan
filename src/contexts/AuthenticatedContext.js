import React, {createContext , useState} from 'react';

export const AuthenticatedContext = createContext();

const AuthenticatedContextProvider = (props)=>{

    const [isAuthenticated, setIsAuthenticateds] = useState(false); 

 
    return(
      <AuthenticatedContext.Provider value={{isAuthenticated, setIsAuthenticateds}}>
        {props.children}
      </AuthenticatedContext.Provider>
    );
}

export default AuthenticatedContextProvider;