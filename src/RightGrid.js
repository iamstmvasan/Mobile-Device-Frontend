import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import "./custom-style/demotext.css"

export default function RightGrid(){
    return(
        <Grid item md={6} className="custom-right-grid" style={{backgroundColor: "#fff"}}>
            <h1>Log In</h1>            
        </Grid>
        
    );
}