import React from 'react';
import './App.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import Login from './Login';
import Creds from './Creds';

function App(props) {


  return(
    <div className="sign">
    
<h1 className="sign">
<Button className="button">Sign Up</Button>
      <h2 className="title">
        MyFitnessBro
      
          </h2>
      </h1>
      <h2 className="header">
        
        <Creds name="Email"field="Enter Email"type="text"></Creds>
        <Creds name="Password" field="Enter Password" type="password"></Creds>
        <Button className="button1"type="submit">Login</Button>

      </h2>
    </div>
    
  );
  
}

export default App;
