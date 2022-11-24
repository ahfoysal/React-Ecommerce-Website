

import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {  updateProfile, getAuth, updatePhoneNumber } from "firebase/auth"
import { TestContext } from '../../App';


const Signup = () => {
  const {    setActiveTabCart, setActiveTabOrder,setActiveTabHome, setActiveTabUser} = useContext(TestContext);

  let { user } =  useUserAuth();
  const auth = getAuth();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ]  = useState("");
    const [ name, setName ]  = useState("");
    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
       
       try{
      await signUp(email, password);
        navigate('/')
        test()
        
       }catch (err) {setError(err.message)}
      
       

        
    
    
      };
    function test() {
      updateProfile(auth.currentUser, {
        displayName: name,
       phoneNumber: '+11234567890',
        
      })
      updatePhoneNumber(123456)
     
    }

    useEffect(() => {


      setActiveTabCart(false)
      setActiveTabOrder(false)
      setActiveTabHome(false)
      setActiveTabUser(true) 
     if(user){ navigate(`/profile`)}
  
    })
  return (
    <div className='signup'>
    <form className='form' onSubmit={handleSubmit}> 
    <h4>Create your Account</h4>
    {error && <Alert variant='danger'>{error}</Alert>}
      <div className="input-bx">
            <input  type="text" required="required" onChange={(e) => setName(e.target.value)}/>
            <span>Name</span>
        </div>     <br />
      <div className="input-bx">
            <input  type="email" required="required" onChange={(e) => setEmail(e.target.value)}/>
            <span>Email</span>
        </div>     <br />





      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group> */}



      <div className="input-bx">
            <input  type="password" required="required" onChange={(e) => setPassword(e.target.value)}/>
            <span>Password</span>
        </div>     <br />



      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </form>
    
    </div>
  )
}

export default Signup
