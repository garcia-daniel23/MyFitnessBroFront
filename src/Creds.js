import React, { Component,useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.css";


function Creds(props){



    const [name,setName] = useState(props.name);
    const [field,setField] = useState(props.field);
    const [type,setType] = useState(props.type)

    return(
        <div>
         
            <input placeHolder={props.field} type={props.type}>
            
            </input>
            

        </div>
    );
}

export default Creds;