import React from 'react';
import './App.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import Login from './Login';
import Creds from './Creds';

function App(props) {


  return(
    <div >

      <h1 className="title">
        MyFitnessBro
        <Button className="button ">
          Sign Up
          </Button>
          </h1>
      
      <h2 className="Button">
        
        <Creds name="Email"field="Enter Email"type="text"></Creds>
        <Creds name="Password" field="Enter Password" type="password"></Creds>
        <Button className="button1"type="submit">Login</Button>

      </h2>
    </div>
    
  );
  
}

export default App;
