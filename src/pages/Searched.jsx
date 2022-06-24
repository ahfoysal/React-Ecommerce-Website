import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from  'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap'



function Searched(props) {
  const addToCart = props.addToCart;

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [loading , setLoading] = useState(true);

    let params = useParams();
    const key = 'consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225';

    const getSearched = async (name) => {
    const data = await fetch(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products?search=${name}&${key}&per_page=20`);
    const recipes = await data.json();
    console.log(recipes)
    setLoading(false)

    setSearchedRecipes(recipes)
  };
  useEffect(() => {
getSearched(params.search);
  
},[params.search]);
  return (
    <div> { loading  ?  <div className="spinnerdiv">      <ReactBootstrap.Spinner animation="border" /> </div> :
    <div className='container'>
           <p>found items: {searchedRecipes.length}</p>

    <Grid>  
        {searchedRecipes.map((item) => {
            return(
              
                <Card key={item.id}><Link to={'/product/'+item.id}>
                        <img src={item.images[0].src} alt={item.name} />
                        <h4>{item.name}</h4></Link>
                        <div className="btn">
       <button className="buy-btn" onClick={() => addToCart(item)}>Add To Cart</button>
        </div>
                </Card>   
               
            )
        }
        )}
  
    </Grid> </div>} </div>
  )
}
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
grid-gap: 10px;
`
const Card = styled.div`


img{
  border-radius: 2rem;
  width: 100%;
}
h4{
  padding: 1rem;
  text-align: center;
}
`

export default Searched