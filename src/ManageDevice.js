import { makeStyles } from "@material-ui/core";
import React from "react";
import Grid from '@material-ui/core/Grid';
import MOCK_Data from "./MOCK_DATA.json";
import BasicTable from "./BasicTable";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({


    root: {
        height: '100vh',
    },

    paper: {
        alignItems: 'center',
        position: '"absolute"',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: 60,
        width : 1920,
        background: 'linear-gradient(180deg, #1461E8 0%, #518EF8 100%)',
    },

    divText: {
        alignItems: 'center',
        margin: 0,
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '54px',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: ' #FFFFFF',

    },
    manageDevice: {
        textAlign : 'left', 
        margin : 10,  
    },
    deviceLink: {
        
        width: 150,
        height: 30 ,
        left: 0,
        top: 0,
        fontSize: 26,
     

        /* Dark Text */

        color:' #152A4F',


        /* Inside Auto Layout */

        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 10px',
    },
    newDevice : {
        position: 'static',
        width: '82px',
        height: '21px',
        left: '21px',
        top: '0px',
        color : '#518EF8',
        padding : 10,
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '21px',
        border: '1px solid #518EF8',
        alignItems: 'center',
    },
    
}));

export default function ManageDevice() {
    const classes = useStyles();

    

    return (
        <Grid container>
            <div className={classes.paper}>
                <p className={classes.divText}>Device List</p>
            </div>
            <div className={classes.manageDevice} >
                <span className={classes.deviceLink}>Devices</span>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<AddIcon />}
                >
                    New Device
                </Button>
            </div>
            
            <BasicTable />
        </Grid>
    );
}