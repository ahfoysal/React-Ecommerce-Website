import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';




const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ]  = useState("");
  const { logIn } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
     console.log(`login`)
     try{
    await logIn(email, password);
    console.log(user)
      navigate('/')
      
     }catch (err) {setError(err.message)}
 

     
    };

  return (
    <div className='container margin-top'>
    <Form  onSubmit={handleSubmit}>
    {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Link to={'/signup'}> <h3 > sign up </h3></Link>
    </div>
  )
}

export default Login
