

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
    <div className='container margin-top'>
    <Form onSubmit={handleSubmit}> 

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
        {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
    
    </div>
  )
}

export default Signup
