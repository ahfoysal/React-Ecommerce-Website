import { createContext, useEffect, useState, useContext } from "react";


const contextProviderS = createContext();

export function ContextProviderS({ children }) {
    // const [cart , setCart] = useState([]);
    // const [cart , setCart] = useState([]);
    // const [allProducts, setAllProducts] = useState([]);







    const [contextT, setContextT] = useState();
    function contextTest(email, password ) {

        const unsubscribe = () => {
             console.log(email, password);
        };
        return unsubscribe(email, password)
         
    }
    

    
    useEffect(() => {
    //    const unsubscribe =  () => {
    //          console.log('unsubscribe');
    //     };
    //     return () => {
    //         unsubscribe();
    //     }
    }, []);
    return(  
    <contextProviderS.Provider value={{ contextT, contextTest, setContextT }}>{children}</contextProviderS.Provider>)
    ;

}

export function useContextS() {
    return useContext(contextProviderS);
}


