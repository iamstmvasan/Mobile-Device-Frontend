import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import img from "./images/abstract.png";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from "@material-ui/core/InputAdornment";



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url(" + img + ")",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    position: 'absolute',
    width: 950,
    height:760,
    left: 0,
    top: 0,

    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#FFFFFF',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    padding: "0px",

    position: 'absolute',
    width: 600,
    height: 400,
    left: 850,
    top: 300,
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

    background: "#518EF8",
    borderRadius: "12px",   
  },
  headingtext : {
    position: 'absolute',
    width: 90,
    height: 60,
    left: 850,
    top: 150,
    color : "#152A4F",
    // fontFamily: 'Prompt',
    // fontStyle: 'normal',
    // fontWeight: 600,
    // fontSize: 40,
    // lineHeight: 60,

    /* Dark Text */

    

  },
  paratext : {
    position: 'absolute',
    width: 600,
    height: 48,
    left: 855,
    top: 200,
    textAlign: 'left',
    // font-family: Montserrat;
    // font-style: normal;
    // font-weight: 500;
    // font-size: 16
    // line-height: 24
    // /* or 150% */


    /* Body Text */

    color: '#94A0B6',
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square justify="center" alignItems="center" alignContent="center">
        <div className={classes.paper}>
          
         
          <h1 className={classes.headingtext}>Log In</h1>
          <p  className={classes.paratext}>
            A mollis morbi est lorem id lorem venenatis sed. Elit quam nisi, nulla macenas rhoncus, 
            fusce sed velit. Congue aliquet quam .
          </p>
          <form className={classes.form} noValidate>
          
            <TextField
              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="disabled"/>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="disabled"/>
                  </InputAdornment>
                ),
              }}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
