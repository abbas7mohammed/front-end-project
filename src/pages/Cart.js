import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation} from "react-router-dom"
import { collection, doc, deleteDoc , getDocs, getFirestore,documentId } from "firebase/firestore"; 
import fs from'./firebase.js'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';






const myStyle = makeStyles((them)=>({

    mainGrid:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#F7F9F9',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    sectionDiv1:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FDFEFE',
        borderRadius:50,
        paddingLeft:50,
        alignItems:'center',
        margin:20,
    }

}));


   

const Cart = ({myArray}) => {

    const classes = myStyle();



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [carts, setCart] = useState([]);

    useEffect(()=>{
        const cartData = async()=>{
            const dt = await fs.firestore().collection("courses").get()
            setCart(dt.docs.map(doc=>({...doc.data(),id: doc.id})))
        }
        cartData()
        },[]);
        
        var total = 0
        var sum = 0
        carts.map(cart=>{
                total = total+ cart.cartprice
        })




    return (
        <Grid container className={classes.mainGrid}>
            <Grid item  xs={12} sm={12} md={6} lg={6} >
            <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:30, marginBottom:30}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        />
                        <Box style={{paddingLeft:10, paddingRight:10}}>
                            <Typography style={{fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                                Your Carts
                            </Typography>
                        </Box>
                    <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800"
                        />
                    </Grid>
            {
                carts.map(cart=>{
                    return(
                        <Container>
                            <Grid item  xs={12} sm={12} md={6} lg={6} sx={{ display:'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems:'center' ,padding:3}} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                <Card sx={{ width:650, padding:2}}>
                                    <CardContent style={{display: 'flex', flexDirection:'column', padding:20}} >
                                    <Box >
                                        <Typography 
                                        style={{ fontSize: 14,fontFamily: 'Comfortaa', }} 
                                        color="text.secondary" 
                                        gutterBottom
                                        key={cart.id}
                                        >
                                            {cart.cartname} 
                                        </Typography>                   
                                    </Box>
                                    <Box>
                                        <Typography 
                                        style={{ fontSize: 15,fontFamily: 'Comfortaa', }} 
                                        gutterBottom
                                        key={cart.id}
                                        >
                                            {cart.cartprice}$ 
                                        </Typography>  
                                    </Box>
                                    </CardContent>
                                    <IconButton onClick={handleClickOpen}>
                                        <RemoveCircleIcon fontSize='small' className='iconAdd' />
                                    </IconButton>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                        {"Warning"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Are you sure to delete course
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose}>No</Button>
                                        <Button onClick={async()=>{
                                       await fs.firestore().collection('courses').doc(cart.id).delete()
                                       .then(()=>{
                                           handleClose()
                                       })
                                    }
                                            
                                        } autoFocus>
                                            Yes
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Card>
                            </Grid>
                        </Container>  
                    );
                })
            }
            </Grid>
            <Grid item className={classes.sectionDiv1} xs={12} sm={12} md={6} lg={6} >
                <Box  >
                    <Typography variant='h5' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:15}}>
                        Total Price:
                    </Typography>
                </Box>
                <Box >
                    <Typography variant='body2' style={{fontFamily: 'Comfortaa',fontWeight:700, padding:15}}>
                        {total}$
                    </Typography>
                </Box>           
            </Grid>
        </Grid>
    );
}

export default Cart
