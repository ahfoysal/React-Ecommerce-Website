import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

function Recipe() {

  let params = useParams();
  const [details , setDetails] = useState({});
  const [image , setImage] = useState({});
  const [loading , setLoading] = useState(false);


  const [activeTab , setActiveTab] = useState("instructions");


const key = 'consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';
const fetchDetails = async () =>{
  const data = await fetch(`https://expressbuybd.com/wp-json/wc/v3/products/${params.name}?${key}`);
  const detailData = await data.json();
setDetails(detailData);
setLoading(true)
setImage(detailData.images[0].src);
console.log(detailData)
};

useEffect(() => {
 fetchDetails();
},[params.name]);

  return (
    
    
    <DetailsWrapper>
{
  loading ? 

  
  <div className='container productpage'>
  <div className="product-image">
  <img src={image} alt={details.name} />
</div>
<Info> 
<h2>{details.name}</h2>
  <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
    Instruction
    </Button>
  <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
    Ingredients</Button>
    {activeTab === 'instructions' && (
      <div>    
<h3 dangerouslySetInnerHTML={{ __html: details.short_description }} ></h3>
<h3 dangerouslySetInnerHTML={{ __html: details.description }} ></h3>

  </div>
    )}
            {activeTab === 'ingredients' && (
              
              <h3 dangerouslySetInnerHTML={{ __html: details.name }} ></h3>

          )  }




</Info></div>

:

<div className="spinnerdiv">      <ReactBootstrap.Spinner animation="border" /> </div>

  


}
    
       </DetailsWrapper>
       
  )
}

const DetailsWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;


.active{
background: linear-gradient(35deg, #494949, #313131);
color: white;
}
h2{
margin-bottom: 2rem;
margin-top: 1rem;
}
h2{
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  }
li{
font-size: 1.2rem;
line-height: 2.5rem;

}
ul{
margin-top: 2rem;
}

`;

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;
const Info = styled.div`
margin-top: 4rem;

margin-left: 5rem;

`;

export default Recipe