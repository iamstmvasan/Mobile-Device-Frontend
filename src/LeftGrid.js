import React from "react";
import Grid from '@material-ui/core/Grid';

import img from "./images/abstract.png";
import "./custom-style/leftgrid.css";


export default function LeftGrid(){
    
    return (
        <Grid  item md={6}>
            <img alt="side-img" src={img} className="customgrid"></img>
        </Grid>
    );
}