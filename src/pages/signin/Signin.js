import { Box, Button, Card, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { height } from '@mui/system';
import React, { useCallback, useRef, useEffect,useState } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Signup from '../signup/Signup';
import app from '../firebase.js';
import 'firebase/compat/auth';
import SwipeToSlide from '../swiper/Swiper';
import { useHistory } from "react-router-dom";
import CoursesDetails from '../courses/coursesections/courseDetails';

  

const auth = app.auth();

const myStyle = makeStyles((them)=>({

    mainGrid:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#F7F9F9',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        padding:100
    },
    courseSignin:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderRadius:150,
    },
    textField:{
        width:300,
    },
    courseBox:{
        backgroundColor:'#FDFEFE',
        display:'flex',
        width:800,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderRadius:50,
        padding:30,
        marginBottom:50
    }

}));

    

const Signin = () => {
    const classes = myStyle();
    let history = useHistory();
    function handleClick() {
        history.push("/");
      }
    const email = useRef(null)
    const password = useRef(null)

    const LoginWithFirebase= useCallback(async e => {
        await auth.signInWithEmailAndPassword(email.current.value, password.current.value)
        .then((res)=>{
            alert("Login is sucssesful");
            handleClick()
        })
        .catch((error)=>{
            alert(error)
        })
    },[],
    );


    
    return (
        <Box  className={classes.mainGrid}>
            <Grid container className={classes.courseBox} sx={{boxShadow:2}}>
            <Grid item xs={12} sm={12} md={7} lg={7}  >
            <Box style={{marginBottom:20}} >
            <Typography variant='h6'>
                Sign In
            </Typography>
            </Box>
            <Box style={{marginBottom:20}}>
            <TextField id="outlined-basic" label="Email" variant="outlined"  size='small' inputRef={email} className={classes.textField} />
            </Box>
            <Box style={{marginBottom:20}}>
            <TextField id="outlined-basic" label="Password" variant="outlined"  size='small' inputRef={password} className={classes.textField} />
            </Box>
            <Box style={{marginBottom:20}}>
                <Typography variant='caption'>
                    if you don't have account please <spam>
                        <NavLink to='/Signup'>
                            <a>register</a>
                        </NavLink>
                    </spam>
                </Typography>
            </Box>
                <Box>
                    <Button variant="contained" 
                            disableElevation 
                            style={{width:300, background:'#7b1fa2', color:'#FDFEFE'}}
                            onClick={LoginWithFirebase}>
                        SIGNIN
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img 
                        src='./images/signin.jpg' 
                        width={250} 
                        height={200} 
                    />
            </Grid>
            </Grid>
            <Box style={{display: 'flex', 
                justifyContent:'center', 
                alignItems:'center',
                backgroundColor:'#2C3E50', 
                width:'100%',
                height:20,
                paddingBottom:10,
                paddingTop:10}}>
                        <Typography variant='caption' style={{color:'#F2F3F4'}}>
                            Best books for English learning
                        </Typography>
                </Box>
            <Box style={{display: 'flex', 
            justifyContent:'center', 
            alignItems:'center',
            backgroundColor:'#2C3E50', 
            width:'100%',
            height:130}}
            >
                <SwipeToSlide />
            </Box>
        </Box>
)
}

export default Signin
