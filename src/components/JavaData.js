import axios from "axios";
// import React from "react";


// child component of Employee 
let JavaData = (props) => {

    // props.getCall('Sonu');

    let getCall = (event) => {
        props.childCallBack('Sonu');
        event.preventDefault(); // important
    }
    
    let message = props.parentName;

    axios.get('/hello').then((abc) => {
        message = abc.data;
        console.log(abc.data);
    });

    axios.get('/emp').then((abc) => {
        message = abc.data;
        console.log(abc.data);
    });

    axios.get('/getemp/101').then((abc) => {
        message = abc.data;
        console.log(abc.data);
    });

    return (
        <div>
            <p>Java Data</p>
            <p>{getCall}</p>
            <p> {props.dataFromParent} </p>
            {/* <p> {this.message} </p> */}
        </div>
    )
    }

export default JavaData;


