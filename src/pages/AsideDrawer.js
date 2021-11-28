import { Drawer, 
  List, 
  ListItem, 
  IconButton, 
  Typography, 
  Button, 
  makeStyles, 
  Box, 
  Grid,
  AccordionSummary, 
  AccordionDetails, 
  Accordion, 
  ListItemText,
  Grow,
  Divider,
  ListItemIcon} from '@material-ui/core';import React, {useState} from 'react'
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoginIcon from '@mui/icons-material/Login';
import ListItemButton from '@mui/material/ListItemButton';
import StarBorder from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';



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
     marginTop:5,
     marginBottom:5
 },
 navGrid:{
      height:'100%',
      backgroundColor:'#FDFEFE',
      textAlign:'center',
      borderRadius:20,
      margin:15
 },
 listfontAttrib:{
     color:'#1C2833',
     fontSize:14,
     fontWeight:550,
 },


}));

const AsideDrawer = ()=>{
    const classes = myStyle();
    const [openDrawer, setOpenDrawer] = useState(false);

    const [openAdmin, setopenAdmin] = useState(false);

    const handleClick = () => {
      setopenAdmin(!openAdmin);
    };


    return(
        <>
        <Drawer
        open={openDrawer}
        onClose={()=> setOpenDrawer(false)}
        >
          <Box>
            <Grid className={classes.navGrid}>
            <Box>
            <NavLink to="/" style={{textDecorationLine:'none'}}>
                <img 
                    src='./images/newlogo.jpg' 
                    width={100} 
                    height={80} 
                    onClick={()=> setOpenDrawer(false)}
                />
            </NavLink>
            </Box>
            <Box>
              <Divider />
            </Box>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                  <ListItem onClick={()=> setOpenDrawer(false)}>
                    <ListItemText>
                      <NavLink to="/" style={{textDecorationLine:'none'}}>
                        <ListItemButton>
                        <ListItemIcon>
                            <Box sx={{backgroundColor:'#3498DB', borderRadius:3,padding:3,height:30, width:30,}}>
                                <HomeIcon sx={{height:15, width:22, color:'#F7F9F9'}}/>
                            </Box>
                        </ListItemIcon>
                            <Typography style={{ color:'#212F3D', fontFamily: 'Comfortaa', fontSize:14, fontWeight:700}}>
                                Home
                            </Typography>
                        </ListItemButton>                        
                    </NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> setOpenDrawer(false)}>
                    <ListItemText>
                      <NavLink to="/Courses" style={{textDecorationLine:'none'}}>
                          <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{backgroundColor:'#76D7C4', borderRadius:3,padding:3,height:30, width:30,}}>
                                <LibraryBooksIcon sx={{height:15, width:22, color:'#F7F9F9'}}/>
                            </Box>
                        </ListItemIcon>
                            <Typography style={{ color:'#212F3D', fontFamily: 'Comfortaa', fontSize:14, fontWeight:700}}>
                                Courses
                            </Typography>
                          </ListItemButton>                        
                      </NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> setOpenDrawer(false)}>
                    <ListItemText>
                      <NavLink to="/Cart" style={{textDecorationLine:'none'}}>
                        <ListItemButton>
                        <ListItemIcon>
                            <Box sx={{backgroundColor:'#F4D03F', borderRadius:3,padding:3,height:30, width:30,}}>
                                <LocalMallIcon sx={{height:15, width:22, color:'#F7F9F9'}}/>
                            </Box>
                        </ListItemIcon>
                            <Typography style={{ color:'#212F3D', fontFamily: 'Comfortaa', fontSize:14, fontWeight:700}}>
                                Cart
                            </Typography>
                        </ListItemButton>                        
                      </NavLink>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> setOpenDrawer(false)}>
                    <ListItemText>
                      <NavLink to="/Contact" style={{textDecorationLine:'none'}}>
                          <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{backgroundColor:'#CD6155', borderRadius:3,padding:3,height:30, width:30,}}>
                                <ContactPhoneIcon sx={{height:15, width:22, color:'#F7F9F9'}}/>
                            </Box>
                        </ListItemIcon>
                            <Typography style={{ color:'#212F3D', fontFamily: 'Comfortaa', fontSize:14, fontWeight:700}}>
                                Contact us
                            </Typography>
                          </ListItemButton>                        
                      </NavLink>
                    </ListItemText>
                  </ListItem>
            </List>
            </Grid>
        </Box>     
      </Drawer>
      <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
          <MenuIcon/>
      </IconButton>
      </>
    );

}

export default AsideDrawer;