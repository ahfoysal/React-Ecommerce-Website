

import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ]  = useState("");
    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
       
       try{
      await signUp(email, password);
        navigate('/login')
        
       }catch (err) {setError(err.message)}
   
      };

  return (
    <div className='container margin-top'>
    <Form onSubmit={handleSubmit}> 

    {/* <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group> */}
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
