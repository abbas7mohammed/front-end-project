import { Box, Button, Card, CardContent,Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, styled, TextField, Typography } from '@material-ui/core'
import { height } from '@mui/system';
import Divider from '@mui/material/Divider';
import React, { useCallback, useRef, useEffect,useState } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Signup from '../signup/Signup';
import app from '../firebase.js';
import 'firebase/compat/auth';
import Avatar from '@mui/material/Avatar';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import HeadsetSharpIcon from '@mui/icons-material/HeadsetSharp';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AnimatedNumber from "react-animated-number";import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#29A7AE ',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function createData(name, reading, speacking, listening, writing) {
    return { name, reading, speacking, listening, writing };
  }
  
  const rows = [
    createData('Abbas', 10, 10, 10, 10),
    createData('Layla', 9.6, 9, 10,9.2),
    createData('Ali', 9.5, 9, 9,9.1),
    createData('Sameer', 9, 8.7, 8, 9.8),
    createData('Nermin', 8.8, 9, 8.6, 8.9),
  ];

const myStyle = makeStyles((them)=>({

    mainGrid:{
        display:'flex',
        backgroundColor:'#F7F9F9',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        padding:40
    },
    listfontAttrib:{
        color:'#17202A',
        fontSize:12,
        fontWeight:600,
        fontFamily: 'Comfortaa',
    },
    mainCard:{
        minWidth: 275, 
        borderRadius:60,
    }

}));





const Home = () => {
    const classes = myStyle();
   



    return (
        <Grid container className={classes.mainGrid}>
            <Grid item style={{padding:12}} xs={12} sm={12} md={9} lg={9} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <Card className={classes.mainCard}>
                    <CardContent >
                        <Grid container  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <img 
                            src='./images/teacher1.jpg' 
                            width='100%' 
                            height={170} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7} style={{display:'flex', flexDirection:'column' ,alignItem:'start-flex',padding:30}}>
                            <Box>
                            <Typography style={{padding: 15, fontFamily: 'Comfortaa', fontSize:20, fontWeight:700}}>
                                Englsih Learn
                            </Typography>
                            </Box>
                            <Box >
                            <Typography variant='body1' style={{marginBottom:15}}>
                            Academic study skills addressed include: test taking and note taking skills, 
                            academic vocabulary usage, critical reading and writing, comprehending academic 
                            lectures, research and library skills
                            </Typography>
                            </Box>
                            <Box>
                                <NavLink to="/Courses" style={{textDecorationLine:'none'}}>
                                    <Button 
                                    variant="outlined" 
                                    size="medim" 
                                    style={{backgroundColor:'#08B4E6', color:'#FBFCFC', width:140}}
                                    >
                                    Get Start
                                    </Button>
                                </NavLink>
                            </Box>
                        </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={3} lg={3} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <Card className={classes.mainCard}>
                    <CardContent>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar >
                            <Avatar style={{backgroundColor:'#A8EB12', width: 35, height: 35}} >
                                <MenuBookSharpIcon className={classes.listIconAttrib}  />
                            </Avatar>
                            </ListItemAvatar>
                            <Typography className={classes.listfontAttrib}>
                                Reading
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar style={{backgroundColor:'#EBE312', width: 35, height: 35}}>
                                <PsychologySharpIcon className={classes.listIconAttrib} />
                            </Avatar>
                            </ListItemAvatar>
                            <Typography className={classes.listfontAttrib}>
                                Speacking
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar style={{backgroundColor:'#12A4EB', width: 35, height: 35}}>
                                <HeadsetSharpIcon className={classes.listIconAttrib} />
                            </Avatar>
                            </ListItemAvatar>
                            <Typography className={classes.listfontAttrib}>
                                Listening
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar style={{backgroundColor:'#EB12CD', width: 35, height: 35}}>
                                <MenuBookSharpIcon className={classes.listIconAttrib} />
                            </Avatar>
                            </ListItemAvatar>
                            <Typography className={classes.listfontAttrib}>
                                Writing
                            </Typography>
                        </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:30}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
                <Box style={{paddingLeft:10, paddingRight:10}}>
                    <Typography style={{fontFamily: 'Comfortaa', fontSize:15, fontWeight:'bold'}}>
                        Services
                    </Typography>
                </Box>
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
            </Grid>
            <Grid container spacing={10} style={{backgroundColor:'#FBFCFC' ,display:'flex', justifyContent:'center' , textAlign:'center',alignItems:'center', padding:45,marginTop:20}}>
                <Grid item style={{display:'flex', flexDirection:'column', justifyContent:'center'}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <Box >
                        <Avatar style={{backgroundColor:'#08B4E6', width: 90, height: 90}}>
                            <NoteAltIcon style={{fontSize:50}} />
                        </Avatar>
                    </Box>
                    <Box>
                        <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                            Training
                        </Typography>
                    </Box>
                </Grid>
                <Grid item style={{display:'flex', flexDirection:'column', justifyContent:'center'}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <Box>
                        <Avatar style={{backgroundColor:'#08B4E6', width: 90, height: 90}}>
                            <LibraryBooksIcon style={{fontSize:50}} />
                        </Avatar>
                    </Box>
                    <Box>
                        <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                            Courses
                        </Typography>
                    </Box>
                </Grid>
                <Grid item style={{display:'flex', flexDirection:'column', justifyContent:'center'}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <Box>
                        <Avatar style={{backgroundColor:'#08B4E6', width: 90, height: 90}}>
                            <GTranslateIcon style={{fontSize:50}} />
                        </Avatar>
                    </Box>
                    <Box>
                        <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                            Translating
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:70, marginBottom:20}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
                <Box style={{paddingLeft:10, paddingRight:10}}>
                    <Typography style={{fontFamily: 'Comfortaa', fontSize:15, fontWeight:'bold'}}>
                        Levels
                    </Typography>
                </Box>
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
            </Grid>
            <Grid container style={{display:'flex', justifyContent:'center'}} >
                <Grid item style={{padding:12,display:'flex', flexDirection:'column',alignItems:'flex-start'}} xs={12} sm={12} md={6} lg={6} data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                    <Box>
                        <Typography style={{padding: 15, fontFamily: 'Comfortaa', fontSize:20, fontWeight:700}}>
                            Learning for all Levels
                        </Typography>
                    </Box>
                    <Box >
                        <Typography >
                        Academic study skills addressed include: test taking and note taking skills, 
                        academic vocabulary usage, critical reading and writing, comprehending academic 
                        lectures, research and library skills
                        </Typography>
                    </Box>
                    <Box>
                        <ul style={{fontFamily: 'Comfortaa', fontSize:16, fontWeight:700}}>
                            <li>Biggner</li>
                            <li>Middle</li>
                            <li>Advance</li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item  xs={12} sm={12} md={6} lg={6} data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <img 
                    src='./images/home2image.jpg' 
                    width={400} 
                    height={300} 
                    />
                </Grid>
            </Grid>
            <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:30, marginBottom:10}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
                <Box style={{paddingLeft:10, paddingRight:10}}>
                    <Typography style={{fontFamily: 'Comfortaa', fontSize:15, fontWeight:'bold'}}>
                        Statistics
                    </Typography>
                </Box>
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
            </Grid>
            <Grid container spacing={10} style={{display:'flex', justifyContent:'center' , textAlign:'center',alignItems:'center', padding:45}}>
                <Grid item  style={{backgroundColor:'#FBFCFC' ,display:'flex', flexDirection:'column', justifyContent:'center'}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <AnimatedNumber
                        value={71}
                        style={{
                            fontSize: 50
                        }}
                        
                        duration={5000}
                        formatValue={(n) => n.toFixed(0)}
                        frameStyle={(percentage) =>
                            percentage > 10 && percentage < 100 ? { opacity: 0.5 } : {}
                        }
                        />
                        <Box>
                        <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                            Training
                        </Typography>
                        </Box>
                </Grid>
                <Grid item style={{backgroundColor:'#FBFCFC' ,display:'flex', flexDirection:'column', justifyContent:'center'}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <AnimatedNumber
                        value={834}
                        style={{
                            fontSize: 50
                        }}
                        variant='div'
                        duration={5000}
                        formatValue={(n) => n.toFixed(0)}
                        frameStyle={(percentage) =>
                            percentage > 10 && percentage < 100 ? { opacity: 0.5 } : {}
                        }
                        />
                        <Box>
                        <Typography style={{paddingTop: 11, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                            Gratuated Students
                        </Typography>
                        </Box>
                </Grid>
                <Grid item style={{backgroundColor:'#FBFCFC' ,display:'flex', flexDirection:'column', justifyContent:'center'}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                    <AnimatedNumber
                        value={32}
                        style={{
                            fontSize: 50
                        }}
                        
                        duration={5000}
                        formatValue={(n) => n.toFixed(0)}
                        frameStyle={(percentage) =>
                            percentage > 10 && percentage < 100 ? { opacity: 0.5 } : {}
                        }
                        />
                        <Box>
                        <Typography style={{paddingTop: 15, fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                            Branchs
                        </Typography>
                        </Box>
                </Grid>
            </Grid>
            <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:30, marginBottom:10}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
                <Box style={{paddingLeft:10, paddingRight:10}}>
                    <Typography style={{fontFamily: 'Comfortaa', fontSize:15, fontWeight:'bold'}}>
                        Top Students
                    </Typography>
                </Box>
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
            </Grid>
            <Grid container spacing={10} style={{display:'flex', justifyContent:'center' , textAlign:'center',alignItems:'center', padding:45}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                                <StyledTableCell>Names</StyledTableCell>
                                <StyledTableCell align="right">Reading</StyledTableCell>
                                <StyledTableCell align="right">Speacking</StyledTableCell>
                                <StyledTableCell align="right">Listening</StyledTableCell>
                                <StyledTableCell align="right">Writing</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.reading}</StyledTableCell>
                                <StyledTableCell align="right">{row.speacking}</StyledTableCell>
                                <StyledTableCell align="right">{row.listening}</StyledTableCell>
                                <StyledTableCell align="right">{row.writing}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
)
}

export default Home
