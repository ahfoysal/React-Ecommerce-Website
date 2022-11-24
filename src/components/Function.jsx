import { createContext, useEffect, useState, useContext } from "react";


const contextProviderS = createContext();

export function ContextProviderS({ children }) {
    const [contextT, setContextT] = useState("hi");
    function contextTest(email, password ) {

        const unsubscribe =  onAuthStateChanged( (currentUser) => {
             console.log('hi');
        });
        return unsubscribe(email, password)
         
    }

    
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged( (currentUser) => {
             console.log('unsubscribe');
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return(  
    <contextProviderS.Provider value={{ contextT, contextTest }}>{children}</contextProviderS.Provider>)
    ;

}

export function useContextS() {
    return useContext(contextProviderS);
}


