import { Button, Divider, makeStyles, Snackbar, Typography } from '@material-ui/core'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation} from "react-router-dom"
import { collection, addDoc, getFirestore } from "firebase/firestore"; 



const myStyle = makeStyles((them)=>({

    mainGrid:{
        display:'flex',
        backgroundColor:'#F7F9F9',
        justifyContent:'center',
        alignItems:'center'
    },
    sectionDiv1:{
        display:'flex',
        backgroundColor:'#FDFEFE',
        borderRadius:50,
        paddingLeft:50,
        alignItems:'center',
        marginBottom:20
    },
    sectionDiv2:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FDFEFE',
        borderRadius:50,
        paddingLeft:50,
        alignItems:'center',
        marginBottom:20
    },
    sectionDiv3:{
        display:'flex',
        backgroundColor:'#FDFEFE',
        borderRadius:50,
        padding:30,
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:20
    },

}));


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
   

const CourseInfo = () => {

    const location = useLocation();
    const {id} = location.state;
    const {courseName} = location.state;
    const {courseImg} = location.state;
    const {coursePrice} = location.state;
    const {courseDescrip} = location.state;
    const {teacherName} = location.state;
    const {teacherSpic} = location.state;
    const {tacherDescrip} = location.state;
    const {teacherImg} = location.state;
    const {whatLearn} = location.state;




    const classes = myStyle();

    const cTitle = courseName;
    const cPrice = coursePrice;

    const [myArray, setmyArray] = useState()


    const [openSnack, setOpenSnack] = useState(false);

    const handleSnackClickOpen = () => {
        setOpenSnack(true);
    };

    const handleSnackClose = () => {
        setOpenSnack(false);
    };


    const db = getFirestore();

    const addToFirebas = async ()=>{

        const ref = await addDoc(collection(db,'courses'),{
            cartname: cTitle,
            cartprice: cPrice,
        }).then(()=>{
            handleSnackClickOpen()
        })
    }




    return (
        <Box className={classes.mainGrid}>
            <Grid container style={{display:'flex', flexDirection:'column' ,margin:70}}>
                <Grid container xs={12} xsm={12} md={12} lg={12} className={classes.sectionDiv1} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <Grid item  xs={12} sm={12} md={8} lg={8} >
                        <Grid>
                            <Typography variant='h5' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                                {courseName}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='body2' style={{fontFamily: 'Comfortaa',fontWeight:700, padding:15}}>
                                {coursePrice}$
                            </Typography>
                        </Grid>          
                        <Grid style={{padding:15}}>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={20}
                            activeColor="#ffd700"
                        />
                        </Grid>
                        <Grid>
                            <Typography variant='body2' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                                {courseDescrip}
                            </Typography>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Grid>
                            <img 
                            src={courseImg}
                            width={120} 
                            height={160} 
                            />
                        </Grid>
                        <Grid>
                            <Button 
                                variant="outlined" 
                                size="small" 
                                style={{backgroundColor:'#08B4E6', color:'#FBFCFC', width:120}}
                                onClick={addToFirebas}
                                >
                                Add to cart
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container xs={12} sm={12} md={12} lg={12} className={classes.sectionDiv2} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <Grid>
                        <Typography variant='h5' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                            What you learn?
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body2' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                            {whatLearn}
                        </Typography>
                    </Grid> 
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.sectionDiv3} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"> 
                    <Box style={{width:175,borderRadius:70,backgroundColor:'#A8EB12'}}>
                        <Typography style={{fontFamily: 'Comfortaa',fontSize:12, fontWeight:700, padding:10}}>
                            About teacher
                        </Typography>
                    </Box>
                    <Grid item xs={12} sm={12} md={4} lg={4} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Grid>
                            <img 
                            src={teacherImg} 
                            width={120} 
                            height={160} 
                            />
                        </Grid>
                        <Grid>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={20}
                                activeColor="#ffd700"
                            />
                        </Grid>
                    </Grid>
                    <Box>
                    <Divider orientation="vertical" style={{height:150}} variant="middle" flexItem />
                    </Box>
                    <Grid item  xs={12} sm={12} md={8} lg={8} >
                        <Grid>
                            <Typography variant='h5' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                                {teacherName}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='body2' style={{fontFamily: 'Comfortaa',fontWeight:700, padding:15}}>
                                Specialty : <span style={{fontFamily: 'Comfortaa',fontWeight:700, color:"blue"}}>{teacherSpic}</span>
                            </Typography>
                        </Grid>          
                        <Grid>
                            <Typography variant='body2' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                                {tacherDescrip}
                            </Typography>
                        </Grid>  
                    </Grid>
                </Grid>
                <Snackbar 
                    open={openSnack} 
                    autoHideDuration={6000} 
                    onClose={handleSnackClose}
                    message='course added successfully'
                    />
            </Grid>
        </Box>
    )
}

export default CourseInfo
