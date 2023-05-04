import React, { useState }  from 'react'
import { Input,Label,Row,Col,Button,Alert} from 'reactstrap'
import Home from './Home';

import { useNavigate } from "react-router-dom";
function Createpost() {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [id, setId] = useState();
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !title || !id) {
      setFlag(true);
    } else {
      setFlag(false);
      const item= JSON.parse(localStorage.getItem('movie'));

      if(item.length !== 0){
       
       item.push({name ,title,id})
      localStorage.setItem('movie',JSON.stringify(item))
      console.log("saved in local storage");
      }
      setHome(!home);
    }
  };
  return (
    <>

    <div>
        <form onSubmit={handleSubmit}>
        <Row className="box">
          <Col md={4}>
          <div className="form-group">
            <Label>Movie name</Label>
            <Input
            type='text'
            placeholder='enter movie name'
            onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
            <Label>Movie title</Label>
            <Input
            type='text'
            placeholder='enter movie title'
            onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
            <Label>Movie Id</Label>
            <Input
            type='text'
            placeholder='enter movie id'
            onChange={(e) => setId(e.target.value)}/>
            </div>
            <Button color="success" onClick={() => {
          navigate("/Home");}}>create post</Button>
            </Col>
            </Row>
        
        </form>
    </div>
 
      </>
  )
}

export default Createpost;