import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import {  Button, Input, Form,Row,Col,FormGroup} from "reactstrap";


function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div style={{
      backgroundImage:`url("img/logo.jpg")`,
      height:"100vh",
      backgroundPosition:'center',
      backgroundSize: "100%",

    }}>
      <div className="container">
    
      <Form>

     <Row>
    <Col md={4}>
      <FormGroup>
      
        <h3 >Signup</h3>
         
        <Input
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <Input
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <Input
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        
          <b >{errorMsg}</b>
          <Button className="btn" color="success" onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </Button>
          <Button className="btn" onClick={handleSubmission} >
            <Link to="/login">already have an account</Link>
  
          </Button>
          
          {/* <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p> */}
            </FormGroup>
    </Col>
  </Row>
  
  </Form>
  
  </div>
      </div>
  
  );
}

export default Signup;
