import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import img from "./images/add-device.png";


import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EventIcon from '@material-ui/icons/Event';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';

import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { appToken, deviceList } from './constants';
import DatePick from './DatePick';
import { Modal } from '@material-ui/core';


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
    width: 500,
    height: 400,
    left: 900,
    top: 150,

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height : 100,
    background: "#518EF8",
    borderRadius: "12px",
  },
  headingtext: {
    // position: 'absolute',
    // // width: 120,
    // height: 60,
    // right: 270,
    // top: 50,
    color: "#152A4F",
    // fontFamily: 'Prompt',
    // fontStyle: 'normal',
    // fontWeight: 600,
    // fontSize: 40,
    // lineHeight: 60,

    /* Dark Text */



  },
  
}));;

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default function AddDevice() {
  const classes = useStyles();

  const [deviceName, setDeviceName] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [modelNo, setModelNo] = useState('');

  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState('');
  const [alertType, setAlertType] = useState('');

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleDevicenameChange = (event) => {
    setDeviceName(event.target.value);
  }
  const handleDeviceModelChange = (event) => {
    setDeviceModel(event.target.value);
  }
  const handlePurchaseDateChange = (event) => {
    setPurchaseDate(event.target.value);
  }
  const handleSerialNoChange = (event) => {
    setSerialNo(event.target.value);
  }
  const handleModelNoChange = (event) => {
    setModelNo(event.target.value);
  }

  const handleClose = () => {
    setAlert(false)
    setMsg('')
  }

  const onAddDevice = () => {
    if (deviceName.length === 0) {
      setAlert(true)
      setMsg('Please enter device name')
      setAlertType('error')
    } else if (deviceModel.length === 0) {
      setAlert(true)
      setMsg('Please enter device model')
      setAlertType('error')
    } else if (purchaseDate.length === 0) {
        setAlert(true)
        setMsg('Please enter purchase date')
        setAlertType('error')
      } else if (serialNo.length === 0) {
        setAlert(true)
        setMsg('Please enter serial number')
        setAlertType('error')
      } else if (modelNo.length === 0) {
        setAlert(true)
        setMsg('Please enter model number')
        setAlertType('error')
      } else {
      axios.post("http://localhost:6060/addDevice", {
        name: deviceName,
        model: deviceModel,
        purchaseDate : purchaseDate,
        serialNo : serialNo,
        modelNo : modelNo
      },{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(appToken)}`,
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json"
          }
      })
        .then((res) => {
          if (res.data) {
            
            setAlert(true)
            setMsg('Success fully Added ')
            setAlertType('success')
            
          } else {
            setAlert(true)
            setMsg('Add device failed')
            setAlertType('warning')
          }
        })
        .catch(() => {
          setAlert(true)
          setMsg('Add Device failed')
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
              <h1 className={classes.headingtext}>Add New Device</h1>
                <TextField
                  onChange={handleDevicenameChange}
                  value={deviceName }
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="deviceName"
                  label="Device Name"
                  name="name"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  onChange={handleDeviceModelChange}
                  value={deviceModel}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="model"
                  label="Device Model"
                  type="text"
                  id="deviceModel"
                  
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  onChange={handlePurchaseDateChange}
                  value={purchaseDate}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="purchaseDate"
                  label="Purchase Date"
                  type="date"
                  id="password"
                  
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EventIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  onChange={handleSerialNoChange}
                  value={serialNo}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="serialNo"
                  label="Serial No"
                  type="number"
                  id="serialNo"
                  
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyboardHideIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  onChange={handleModelNoChange}
                  value={modelNo}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="modelNo"
                  label="Model No / IMEI No"
                  type="text"
                  id="modelNo"
                  
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyboardHideIcon color="disabled" />
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
                  onClick={onAddDevice}
                >
                  Add Device
                </Button>
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
