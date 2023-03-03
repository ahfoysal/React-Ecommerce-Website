


import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import  CryptoJS , { AES, enc, SHA256  } from 'crypto-js';




const PaymentSuccess = () => {
    
    const navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams (useLocation().search)
      }
      let query = useQuery()
        const key = query.get('key')

 
    
  

    const secretKey = process.env.REACT_APP_PAYMENT_PIN
    
    


    useEffect(() => {
        // const secretKey = 'mysecretkey';
        // const encryptedData = 'U2FsdGVkX1/9eMYb8nmg3rU6ekwFnPhn5U6M8mzvB7M='
        // const testKey = 'U2FsdGVkX19HJ34mNYLt9b2hztCEp1L2u3SnSp1L2u3Stqoq3UrQ8Tke1Q2u3A4l'
        const ciphertext = key.replace(/p1L2u3S/g, '+' ).replace(/s1L2a3S4h/g, '/').replace(/e1Q2u3A4l/g, '=');
        // console.log(ciphertext)

        
        const bytes = AES.decrypt(ciphertext, secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        
        // console.log( decryptedData);
        navigate(`/order/${decryptedData}`) 
      
    }, [])
  return (
    <div>
        <p  style={{color: "Green", margin: 300}}>Payment-success</p>
       
        
    </div>
  )
}

export default PaymentSuccess