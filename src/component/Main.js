import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap';
// import Register from './Register';
// import Login from './Login';
const Main=()=>{
const navigate= useNavigate();

  return (
    <div style={{
         backgroundImage:`url("img/background.jpg")`,
         backgroundSize:'100%',
         backgroundPosition:'center',
         height:'100vh'
    }}>
    <div className="App">
     <h2><b>Home Page</b></h2>
        <Button  color='info' className='main' onClick={()=>{
         navigate("/Register ")
        }} >Register</Button>
     <Button  color='info' className='main' onClick={()=>{
        navigate("/Login ")
     }}>Login</Button>
    </div>
    </div>
  )
}

export default Main