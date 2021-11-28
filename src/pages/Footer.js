import React from 'react'
import { Box, Container, Card, CardContent, Divider, Grid, Link, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';



const myStyle = makeStyles((them)=>({


    footerMainBox:{
        
        display:'flex',
        flexDirection:'column',
        justifyContent:'content',
        padding:30,
    }

}));
const Footer = () => {
    const classes = myStyle();

    return (
        <Container style={{backgroundColor:'#34495E',}}>
                <Box className={classes.footerMainBox}>
                    <Grid container display={'flex'} justifyContent={'space-between'}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box style={{width:160,borderRadius:70,backgroundColor:'#A8EB12', marginBottom:10}}>
                            <Typography variant='h6' style={{fontFamily: 'Comfortaa', fontWeight:700, padding:2}}>
                               abc academic
                            </Typography>
                            </Box>
                            <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                            Academic study skills addressed include: test taking and note taking skills, 
                            academic vocabulary usage, critical reading and writing, comprehending academic 
                            lectures, research and library skills, formal composition forms and development.
                            </Typography>         
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography variant="h7" component='div' style={{color:'#ECF0F1'}}>
                                SECTIONS
                            </Typography>
                            <List>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        Reading
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        Writing
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        Speacking
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        Listening
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h7" component='div' style={{color:'#ECF0F1'}}>
                                Address
                            </Typography>
                            <List>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        Iraq - Baghdad - Mutanabbi Street
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        +9647811104050
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to='/'>
                                    <Typography variant="caption" component='div' style={{color:'#ECF0F1'}}>
                                        email: abcacademic.english@gmail.com
                                    </Typography>
                                    </NavLink>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Box style={{display: 'flex', justifyContent:'center', padding:5}}>
                        <Link href='#'>
                        <Box style={{paddingRight:10}}>
                            <img 
                                src='./images/facebook.png' 
                                width={30} 
                                height={30} 
                            />
                        </Box>
                        </Link>
                        <Link href='#'>
                        <Box style={{paddingRight:10}}>
                            <img 
                                src='./images/youtube.png' 
                                width={30} 
                                height={30} 
                            />
                        </Box>
                        </Link>
                        <Link href='#'>
                        <Box style={{paddingRight:10}}>
                            <img 
                                src='./images/twitter.png' 
                                width={30} 
                                height={30} 
                            />
                        </Box>
                        </Link>
                        <Link href='#'>
                        <Box style={{paddingRight:10}}>  
                            <img 
                                src='./images/whattsapp.png' 
                                width={30} 
                                height={30} 
                            />
                        </Box>
                        </Link>
                    </Box>
                    <Box style={{display: 'flex', justifyContent:'center', alignItems:'center',backgroundColor:'#2C3E50', width:'100%',height:40}}>
                        <Typography variant='caption' style={{color:'#F2F3F4'}}>
                            All copyright reserved for <spam style={{color:'#F7DC6F'}}>abcacaemic</spam>  © 2021
                        </Typography>
                </Box>
                </Box>

        </Container>
        )
}

export default Footer

