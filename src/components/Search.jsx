import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
import {FormControl, Form, Button} from 'react-bootstrap';


function Search() {

const [input, setInput] = useState("");
const navigate = useNavigate();
const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input)
};

  return (
    <Form className="d-flex " onSubmit={submitHandler}>
    <FormControl
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={(e) => setInput(e.target.value)} type="text" 
value={input}
    />
    <Button variant="outline-success" onClick={submitHandler}><FaSearch/></Button>
  </Form>
    )
}




export default Search