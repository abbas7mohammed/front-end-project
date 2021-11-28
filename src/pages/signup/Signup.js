import { Box, Button, Card, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import {React, useCallback, useRef} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import app from '../firebase.js';
import 'firebase/compat/auth'
import Swiper1 from '../swiper/Swiper.js';
import SimpleSlider from '../swiper/Swiper.js';
import Carosuel from '../swiper/Swiper.js';
import SwipeToSlide from '../swiper/Swiper.js';
import Slider from "react-slick";

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





  
const auth = app.auth();

const Signup = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/");
      }
    const classes = myStyle();
    const email = useRef(null)
    const password = useRef(null)


    const SignupWithFirebase= useCallback(async e => {
        await auth.createUserWithEmailAndPassword(email.current.value, password.current.value)
        .then((res)=>{
            alert("Sign up is sucssesful");
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
                    Sign Up
                </Typography>
                </Box>
                <Box style={{marginBottom:20}}>
                <TextField id="outlined-basic" label="Email" variant="outlined"  size='small' inputRef={email} className={classes.textField} />
                </Box>
                <Box style={{marginBottom:20}}>
                <TextField id="outlined-basic" type="password" label="Password" variant="outlined"  size='small' inputRef={password} className={classes.textField} />
                </Box>
                    <Box>
                        <Button variant="contained" 
                                disableElevation 
                                style={{width:300, background:'#7b1fa2', color:'#FDFEFE'}}
                                onClick={SignupWithFirebase}>
                            SIGNUP
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img 
                            src='./images/signup.png' 
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

export default Signup
