import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {GiRunningShoe} from 'react-icons/gi'


 
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>  
      <Nav><GiRunningShoe/>
        <Logo to={'/'}>Footware</Logo>        <Search/>  
      </Nav>
     {/* <Category/> */}
     <Pages />
      </BrowserRouter>
 
    </div>
  );
}
const Logo = styled(Link)` {

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  font-style: italic;
}`
const Nav = styled.div`
padding: 3rem;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
svg{
font-size: 2rem;
}
`



export default App;
