import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Link} from  'react-router-dom'


function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    const key = 'consumer_key=ck_29618b80e61c705dace0c49ceb724a3959df5b50&consumer_secret=cs_80cd666549222f2d3efb376bade63960ab3ce3d2';

    const getSearched = async (name) => {
    const data = await fetch(`https://expressbuybd.com/wp-json/wc/v3/products?search=${name}&${key}`);
    const recipes = await data.json();
    console.log(recipes)
    setSearchedRecipes(recipes)
  };
  useEffect(() => {
getSearched(params.search);
  
},[params.search]);
  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}><Link to={'/products/'+item.id}>
                        <img src={item.images[0].src} alt={item.name} />
                        <h4>{item.name}</h4></Link>
                </Card>
            )
        }
        )}
    </Grid>
  )
}
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
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