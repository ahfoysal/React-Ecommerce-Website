import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate, useHistory } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { TestContext } from '../../App';
import GoogleButton from 'react-google-button'
import { useContextS } from '../../components/Function';





const Login = () => {

 

  const {    setActiveTabCart, setActiveTabOrder,setActiveTabHome, setActiveTabUser} = useContext(TestContext);

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ]  = useState("");
  const { logIn, googleSignIn, user } = useUserAuth();

  const { contextT, contextTest, setContextT} = useContextS();


  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const history = useHistory()
  const history = useNavigate()

const location= useLocation()
 
 let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = async (e) => {
      e.preventDefault();

      try {
          await googleSignIn()
          navigate(`/`)
      }catch(err) {
            setError(err.message)
      }
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
     console.log(`login`)
     try{
    await logIn(email, password);
    console.log(user)
      // navigate('/') 
      history.replace(from);
      
     }catch (err) {setError(err.message)}
 

     
    };


    useEffect(() => {


      setActiveTabCart(false)
      setActiveTabOrder(false)
      setActiveTabHome(false)
      setActiveTabUser(true) 
     if(user){ navigate(`/profile`)}
  
    })
  return (
    <div className='container margin-top'>
    <Form  onSubmit={handleSubmit}>



    <div className="input-bx">
    {error && <Alert variant='danger'>{error}</Alert>}

            <input type="text" required="required"  onChange={(e) => setEmail(e.target.value)} />
            <span>Username</span>
        </div>
        <br />
        <div className="input-bx">
            <input type="password" required="required"    onChange={(e) => setPassword(e.target.value)}/>
            <span>Password</span>
        </div>

      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group> */}
<div className="buttons">
      <Button  type="submit">
        LOGIN
      </Button></div>
    </Form>
    <GoogleButton onClick={ handleGoogleSignIn } />

    <Link to={'/signup'}> <h3 > sign up </h3></Link>

    <button onClick={() => (setContextT('working'))}> test </button>
    <button onClick={() => (console.log(contextT))}> test2 </button>
    </div>
  )
}

export default Login