import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { auth } from "../firebase";
const Home = () => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("movie"));

  return (
    <>
      <h4>...HOME PAGE...</h4>
       <Button color="secondary"
        className="main"
        onClick={() => {
          navigate("/Createpost ");
        }}
      >
        create post
      </Button>
      {/* {/*<div className="main-box">
        {data.map((ele) => {
          return ( */}
            <>
              <div>
                <Row >
                  <Col>
                    <Card
                      body
                      inverse
                      style={{
                        backgroundColor: "rgb(196, 189, 189)",
                        borderColor: "grey",
                        marginTop: "10px",
                        borderRadius: "10px",
                        textAlign: "center",
                        height: "200px",
                        width: "400px",
                        float:'right'
                      }}
                    >
                      <CardTitle tag="h5">{""}</CardTitle>
                      <CardText>{""}</CardText>
                      <CardText>{""}</CardText>
                    </Card>
                  </Col>
                </Row>
              </div>
            </>
         {/* );
        {/* } */}
        {/* ) */}
        {/* } */}
        
      {/* </div>  */}
    </> 
  );
};

export default Home;
