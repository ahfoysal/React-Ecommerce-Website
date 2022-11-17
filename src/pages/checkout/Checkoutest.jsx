import { useNavigate } from 'react-router-dom';
import React, {   useState } from 'react'
import './Checkout.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Checkoutest = ({cart, setCart}) => {
  const navigate = useNavigate();

  const [isContainerActive, setIsContainerActive] = useState(false);
  const [somethingWentWrong, setSomethingWentWrong] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [formfillup, setFormfillup] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(`test`)
   handleNext()
  };

  
  

  const styyle = {
    width:"24px",
    height:"24px"
  };
  const total = cart.reduce((total, prd) => total + prd.price * prd.abc , 0)

  const createOrder = (e) => {
    e.preventDefault();

    /////cart item find
    const cartItems = cart.map((cart) => `{'product_id': ${cart.id},'quantity': ${cart.abc}}` );
  const StringCart= JSON.stringify(cartItems);  
  const newItms = StringCart.replace (/"/g,'');
  const newCart = newItms.replace (/'/g,'"');
  setIsContainerActive(true);

    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

   const body1 = `{"payment_method":"cod","payment_method_title":"Cash On Delivery","billing":{"first_name":"${name}","address_1":"${address}","phone":"${phone}","email":"${email}"},"line_items":`
  const body2= `${newCart}}`
      const body3 = body1.concat(' ', body2);
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body1.concat(' ', body2),
        redirect: 'follow'
      };
      fetch(`https://shop.abusayeeed.xyz/wp/wp-json/wc/v3/orders?${process.env.REACT_APP_KEY}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          const rslt = result;
          console.log(rslt)
          navigate(`/order/${rslt.number}`)      
          setCart([]) 
          localStorage.removeItem('shopping_cart');
          })
        .catch(error => {
          const rslt = error;
          console.log('error', rslt)
          setSomethingWentWrong(true)
        });
        
      console.log(body3)
  }
  const steps = [
    {
      label: 'Personal Information',
      description:    <div> 
   <form onSubmit={handleSubmit}>
   <label htmlFor="name">Name</label> 
        <input type="text" name='name'  value={name} onChange={(e) => setName(e.target.value)} required />
        <br/> <br/> 
        <label htmlFor="address">Address</label>  
        <input type="text" name='adress' value={address} onChange={(e) => setAddress(e.target.value)} required />
        <br/> <br/> 
        <label htmlFor="phone">Phone</label>  
        <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <br/> <br/> 
        {/* <label htmlFor="email">Email</label>  
        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}  /> */}
        <br></br>
        <button>
          Continue
        </button>
        </form>
    </div>
     
   
    },
    {
      label: 'Payment Options',
      description:
       <div>
  
  <input type="radio" value="Male" name="gender" /> Cash On Delivery <br></br>
        <input type="radio" value="Female" name="gender" /> Bkash 
       </div>,
    },
//     {
//       label: 'Create an ad',
//       description: <div>
//           <button  className={`checkbtn ${isContainerActive ? " checked-out" : ""}`} >
//   <svg  viewBox="0 0 24 24" style={styyle} id="cart">
//     <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
// </svg>
//   <span>Checkout</span>
//   <svg id="check"  viewBox="0 0 24 24" style={styyle}> 
//     <path strokeWidth="2" fill="none" stroke="#ffffff" d="M 3,12 l 6,6 l 12, -12"/>
//   </svg>
// </button>
//       </div>,
//     },
  ];
  return (
    
    <div className='mt-50 container' >
       <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {index === steps.length - 1 ?  <Button
                    variant="contained"
                    onClick=    {index === steps.length - 1  ? createOrder : handleSubmit}
                    sx={{ mt: 1, mr: 1 }}
                    // 
                 disabled={formfillup ? true :  false }
                  >
                    {index === steps.length - 1  ? 'Checkout  ' : 'Continue'}
                  </Button> : ``}
                 
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  
                  

                </div>
                
              </Box>
            </StepContent>
          </Step>
        ))}
      
      </Stepper>
     
    </Box>
      
    <h1>{total}</h1>   
  
  
{isContainerActive ? <h3 className="head">Thank You For Your Order.</h3> : ""}
{somethingWentWrong ? <h3 className="head">somthing went wrong</h3> : ""}


    </div>
  )
}

export default Checkoutest
