import React, { useState } from 'react';

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
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { appToken } from './constants';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ManageDevice from './ManageDevice';

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
    height: 760,
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
    top: 150,

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height : 60,
    background: "#518EF8",
    borderRadius: "12px",
  },
  headingtext: {
    
    color: "#152A4F",
    
  },
  
}));;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignInSide() {
  const classes = useStyles();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState('');
  const [alertType, setAlertType] = useState('');
  

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleClose = () => {
    setAlert(false)
    setMsg('')
  }


  const onLogin = () => {
    if (userName.length === 0) {
      setAlert(true)
      setMsg('Please enter username')
      setAlertType('error')
    } else if (password.length === 0) {
      setAlert(true)
      setMsg('Please enter password')
      setAlertType('error')
    } else {
      axios.post("http://localhost:6060/authenticate", {
        username: userName,
        password: password,
      })
        .then((res) => {
          console.log(res)
          if (res.data) {
            localStorage.setItem(appToken, res.data.responseData.token)
            setAlert(true)
            setMsg('Login Success')
            setAlertType('success')
            
          } else {
            setAlert(true)
            setMsg('Login failed')
            setAlertType('warning')
          }
        })
        .catch(() => {
          setAlert(true)
          setMsg('Login failed')
          setAlertType('warning')
        })
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square >
        <div className={classes.paper}>


          
          
          <div className={classes.form} >
          <h1 className={classes.headingtext}>Log In</h1>
            <TextField
              onChange={handleUsernameChange}
              value={userName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={handlePasswordChange}
              value={password}
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
                    <LockIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />

            <Router>
              <Link to="/manage-device">
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onLogin}
                >
                  Log In
                </Button>
              </Link>

              <Switch>
                <Route exact path="/manage-device">
                  <ManageDevice />
                </Route>
              </Switch>
            </Router>

            
            
          </div>
        </div>
        <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
          <Alert onClose={handleClose} severity={alertType}>
            {msg}
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}
