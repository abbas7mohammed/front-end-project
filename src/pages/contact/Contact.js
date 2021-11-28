import { Box, Button, Card, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { height } from '@mui/system';
import React, { useCallback, useRef, useEffect,useState } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Signup from '../signup/Signup';
import app from '../firebase.js';
import 'firebase/compat/auth';
import SwipeToSlide from '../swiper/Swiper';
import emailjs from 'emailjs-com';




 
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
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        width:800,
        borderRadius:50,
        padding:30,
        marginBottom:50,
    }

}));

    

const Contact = () => {
    const classes = myStyle();



    const form = useRef();


    const Send = (e)=>{
        e.preventDefault();     
        emailjs.sendForm('service_luyt7dm','template_ln7bv1a',form.current,'user_Y55SAsDMB9efGU5MsJCuu')
        .then((result) => {
            alert("your message sent")
            console.log(result.text);
        }, (error) => {
            alert("your message sent");
            console.log(error.text);
        });
}


    
    return (
        <Box  className={classes.mainGrid}>
            <Grid className={classes.courseBox}>
                    <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:30, marginBottom:30}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        />
                        <Box style={{paddingLeft:10, paddingRight:10}}>
                            <Typography style={{fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                                Contact us
                            </Typography>
                        </Box>
                    <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        />
                    </Grid>
                    <form ref={form} onSubmit={Send}>
                    <Box style={{backgroundColor:'#FBFCFC', borderRadius:20, padding:5}}>
                        <TextField 
                            name="sender_name"  
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined" 
                            style={{fontSize:14, width:400}}
                            />
                    </Box>
                    <Box style={{backgroundColor:'#FBFCFC', borderRadius:20, padding:5}}>
                        <TextField 
                            name="sender_email"
                            type="email" 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            style={{fontSize:14, width:400}}
                            />
                    </Box>
                    <Box style={{backgroundColor:'#FBFCFC', borderRadius:20, padding:5}}>
                    <TextField
                        id="standard-multiline-static"
                        label="Type message"
                        multiline
                        rows="4"
                        name="message"
                        variant="outlined"
                        style={{fontSize:14, width:400}}
                    />
                    </Box>
                    <Box>
                    <Button variant="contained" 
                            disableElevation 
                            type='sumbit'
                            style={{width:100, background:'#7b1fa2', color:'#FDFEFE', margin:15}}
                            >
                        Send
                    </Button>
                </Box>
                </form>
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

export default Contact
