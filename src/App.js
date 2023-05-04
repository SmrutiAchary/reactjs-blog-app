import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "./component/Main";
import Login from "./component/Login";
import Register from "./component/Register";
import "./component/Register.css";
import  { useEffect, useState } from "react";
import { auth } from "./firebase";
import Home from "./component/Home"
import Createpost from "./component/Createpost"
const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
          {/* <Route path="/" element={<Home name={userName} />} /> */}

         <Route path="/Home" element={<Home />} />
   
        <Route path="/Createpost" element={<Createpost/>}/>
      </Routes>
    
    </div>
  );
};

export default App;
