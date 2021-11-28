import {React, useEffect, useState} from 'react'
import { Box, 
    List, 
    ListItem, 
    Button,
    Card, 
    CardContent, 
    Typography, 
    makeStyles,
    ListItemText,
    useMediaQuery,
    useTheme,
    Divider,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    Badge,} from '@material-ui/core';
import { AppBar, CssBaseline, DialogContent, Grid, Toolbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoginIcon from '@mui/icons-material/Login';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import AsideDrawer from './AsideDrawer';
import Home from './home/Home';
import Signin from './signin/Signin';
import { shadows } from '@mui/system';
import app from './firebase.js'
import { deepOrange } from '@material-ui/core/colors';
import Cart from './Cart';
import { getAuth } from "firebase/auth";
import fs from'./firebase.js'
import { collection, doc, deleteDoc , getDocs, getFirestore,documentId } from "firebase/firestore"; 



    const db = getFirestore();
    const auth = app.auth();


const myStyle = makeStyles((them)=>({


    mainGrid:{
        margin:0,
        paddingTop:30,
        
    },
    dividerBox:{
        backgroundColor:'#D7DBDD',
        height:0.5,
        width:130,
        borderRadius:150,
        marginLeft:90,
        marginTop:10,
        marginBottom:20
    },
    navGrid:{
        display: 'flex',
        textAlign:'center',
        alignItems:'center',
        borderRadius:20,
        margin:20
         
    },
    listfontAttrib:{
        color:'#F7F9F9',
        fontSize:9,
        fontWeight:600,
        fontFamily: 'Comfortaa',
    },
    listIconAttrib:{
        fontSize:'small',
        color:'#1C2833',

    }

}));


const Navbar = () => {

    const classes = myStyle();

    const [openAdmin, setopenAdmin] = useState(false);

    const handleClick = () => {
      setopenAdmin(!openAdmin);
    };

    const [user, setUser] = useState(null)

    useEffect((user)=>{
        auth.onAuthStateChanged(user=>{
            setUser(user);
        })
    });


    const [carts, setCart] = useState([]);


        useEffect(()=>{
        const cartData = async()=>{
            const dt = await fs.firestore().collection("courses").get()
            setCart(dt.docs.map(doc=>({...doc.data(),id: doc.id})))
        }
        cartData()
        },[]);
        
        var total = 0

        carts.map(cart=>{
                total = total+1
        })

        
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));




    return (
        <AppBar elevation={0} position="static"  >
        <Box style={{backgroundColor:'#FFFFFF'}}>
        <CssBaseline />
            <Toolbar>
            {
                isMobile ? (
                    <AsideDrawer />
                ) : (
                        <Box className={classes.navGrid}  >
                            <NavLink to="/" style={{textDecorationLine:'none'}}>
                                <img 
                                    src='./images/newlogo.png' 
                                    width={100} 
                                    height={80} 
                                />
                            </NavLink>
                            <NavLink to="/" style={{textDecorationLine:'none'}}>
                                <Box sx={{backgroundColor:'#1F618D', borderRadius:5,padding:2, margin:10, width:70}}>
                                    <HomeIcon sx={{fontSize:14, color:'#F7F9F9'}}/>
                                <Typography className={classes.listfontAttrib}>
                                    Home
                                </Typography>
                                </Box>
                            </NavLink>
                            <NavLink to="/Courses" style={{textDecorationLine:'none'}}>
                                    <Box sx={{backgroundColor:'#9A7D0A', borderRadius:5,padding:2, margin:10, width:70}}>
                                        <MenuBookIcon sx={{fontSize:16, color:'#F7F9F9'}}/>                    
                                <Typography className={classes.listfontAttrib}>
                                    Courses
                                </Typography>
                                </Box>                       
                            </NavLink>
                            <NavLink to="/Cart" style={{textDecorationLine:'none'}}>
                                <Badge badgeContent={total} color="secondary">
                                    <Box sx={{backgroundColor:'#148F77', borderRadius:5,padding:2, margin:2, width:70}}>
                                        <LocalMallIcon sx={{fontSize:16, color:'#F7F9F9'}}/>
                                    <Typography className={classes.listfontAttrib}>
                                        Cart
                                    </Typography>
                                    </Box>        
                                </Badge>                    
                            </NavLink>
                            <NavLink to="/Contact" style={{textDecorationLine:'none'}}>
                                    <Box sx={{backgroundColor:'#A04000', borderRadius:5,padding:2, margin:10, width:70}}>
                                        <ContactPhoneIcon sx={{fontSize:16, color:'#F7F9F9'}}/>
                                <Typography className={classes.listfontAttrib}>
                                    Contact US
                                </Typography>
                                </Box>                        
                            </NavLink>
                            <Box>
                                {
                                    user ?
                                    <Box style={{marginLeft:20}}>
                                        <Avatar  style={{ backgroundColor: '#AB48A8', height: '30px', width: '30px', cursor:'pointer' }} onClick={handleClickOpen}>
                                            <Typography variant='body2'>
                                            {user.email.slice(0,1)}
                                            </Typography>
                                        </Avatar>
                                        <Box>
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                    <DialogTitle style={{fontSize:12}} id="alert-dialog-title">
                                                    <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                                                        Information about user
                                                    </Typography>
                                                    </DialogTitle>
                                                    <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                    <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:10, fontWeight:'bold'}}>
                                                        {user.email}
                                                    </Typography>                                                    </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                    <Button onClick={handleClose} autoFocus>
                                                        <Typography style={{paddingTop: 9, fontFamily: 'Comfortaa', fontSize:10, fontWeight:'bold'}}>
                                                            ok
                                                        </Typography>
                                                    </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </Box>
                                    </Box>                        
                                    :
                                    <NavLink to="/Signin" style={{textDecorationLine:'none'}}>
                                        <Box sx={{backgroundColor:'#0C23A5', borderRadius:5,padding:2, margin:10, width:70}}>
                                                <LoginIcon sx={{fontSize:16, color:'#F7F9F9'}}/>
                                            <Typography className={classes.listfontAttrib}>
                                                Sign in
                                            </Typography>
                                        </Box>                        
                                    </NavLink>
                                }
                            </Box>
                        </Box>
                        
    )
}
            </Toolbar>
      </Box>
      </AppBar>
    );
}
export default Navbar
