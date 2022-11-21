import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { TestContext } from '../App';
import { useUserAuth } from '../context/UserAuthContext';

const Profile = () => {
  const {    setActiveTabCart, setActiveTabOrder,setActiveTabHome, setActiveTabUser} = useContext(TestContext);

  let { user } =  useUserAuth();
  const navigate = useNavigate();
  let {  logOut } =  useUserAuth();
  const handleLogOut = async () => {

    try {
      await logOut();
    }catch(err) {
        console.log(err.message)
    }
  }


  useEffect(() => {


    setActiveTabCart(false)
    setActiveTabOrder(false)
    setActiveTabHome(false)
    setActiveTabUser(true) 
   if(!user){ navigate(`/login`)}      

  })
  
  return (
    <div className='container margin-top'>
      Profile
      <button onClick={handleLogOut}>Logout</button> 
    </div>
  )
}

export default Profile
