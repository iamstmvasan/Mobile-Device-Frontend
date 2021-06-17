import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import img from "./images/abstract.png";
import TextField from '@material-ui/core/TextField';
import SignInSide from './SignInSide';
function App() {
  return (
    
    <div className="App">
      <SignInSide />
      {/* <Grid container space={1}>
        <Grid  item
         md={6}>
            <img alt="side-img" src={img} className="customgrid"></img>
        </Grid>
        
        <Grid  md={6} className="custom-right-grid" style={{backgroundColor: "#fff"}}>
            <Grid container>
              <Grid item md={12}>
                <h1>Log In</h1> 
              </Grid> 
              <Grid item >
                <p style={{color : "#94A0B6"}}>A mollis morbi est lorem id lorem venenatis sed. Elit quam nisi, nulla macenas rhoncus, fusce sed velit. Congue aliquet quam </p>
              </Grid> 
            </Grid>
            <Grid container>
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              size="normal"
            />
            
            </Grid>           
        </Grid>
      </Grid> */}
    </div>
    
  );
}

export default App;
