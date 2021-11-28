import React from 'react'
import { Box, Card, CardContent, Divider, Grid, Link, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import readData from './readSet.json';
import listenData from './listenSet.json';
import speakData from './speakSet.json';
import writeData from './writeSet.json';



const dataList = [readData,speakData,listenData,writeData];

const myStyle = makeStyles((them)=>({


    courseBox:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderRadius:150,
        bgcolor: 'background.paper'
    },
    cardInsideBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150,
        backgroundColor:'#EAFAF1 ', 
        height:100,
        width:100,
        marginBottom:10,
        '&:hover':{
            backgroundColor:'#A3E4D7',
        }
    },
    courseCard:{
        display:'flex',
        height:300,
        width:600,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderRadius:15,
        padding:20,
        margin:20
    },
    mainGrid:{
        margin:0,
        paddingTop:30,
        backgroundColor:'#F7F9F9',
        justifyContent:'center',
    },
    listfontAttrib:{
        color:'#1C2833',
        fontSize:12,
        fontWeight:550,
    },

}));
const Courses = () => {
    const classes = myStyle();

    return (
        <Box sx={{backgroundColor:'#F0F3F4'}}>
                    <Grid container className={classes.mainGrid}>
                        <Card className={classes.courseCard}>
                            <CardContent>
                                <Grid container >
                                <Grid item xs={12} sm={12} md={4} lg={4} className={classes.courseBox} >
                                    <NavLink to={{
                                        pathname:'/CoursesDetails',
                                        state:{courseTitle: dataList[0], courseName: 'Reading Courses'}
                                    }}
                                    style={{textDecorationLine:'none'}}>
                                        <Box className={classes.cardInsideBox}>
                                            <Box>
                                                <Typography className={classes.listfontAttrib}>
                                                    Reading
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </NavLink> 
                                    <Box>
                                            <Typography style={{fontSize:11}}>
                                            Very useful selection includes greetings, questions, praises, offers, 
                                            requests, farewells. See short funny demo videos about what to say in dating, 
                                            relating and job interviews. Non-Profit
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <img 
                                        src='./images/reading.jpg' 
                                        width={300} 
                                        height={200} 
                                    />
                                </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card className={classes.courseCard}>
                            <CardContent>
                                <Grid container >
                                <Grid item item xs={12} sm={12} md={4} lg={4} className={classes.courseBox} >
                                <NavLink to={{
                                        pathname:'/CoursesDetails',
                                        state:{courseTitle: dataList[1], courseName: 'Speacking Courses'}
                                    }}
                                    style={{textDecorationLine:'none'}}>
                                        <Box className={classes.cardInsideBox}>
                                            <Box>
                                                <Typography className={classes.listfontAttrib}>
                                                    Speacking
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </NavLink> 
                                    <Box>
                                            <Typography style={{fontSize:11}}>
                                            Very useful selection includes greetings, questions, praises, offers, 
                                            requests, farewells. See short funny demo videos about what to say in dating, 
                                            relating and job interviews. Non-Profit
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item item xs={12} sm={12} md={8} lg={8}>
                                    <img 
                                        src='./images/speacking.jpg' 
                                        width={300} 
                                        height={200} 
                                    />
                                </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card className={classes.courseCard}>
                            <CardContent>
                                <Grid container >
                                <Grid item item xs={12} sm={12} md={4} lg={4} className={classes.courseBox} >
                                <NavLink to={{
                                        pathname:'/CoursesDetails',
                                        state:{courseTitle: dataList[2], courseName: 'Listening Courses'}
                                    }}
                                    style={{textDecorationLine:'none'}}>                                        <Box className={classes.cardInsideBox}>
                                            <Box>
                                                <Typography className={classes.listfontAttrib}>
                                                    Listening
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </NavLink> 
                                    <Box>
                                            <Typography style={{fontSize:11}}>
                                            Very useful selection includes greetings, questions, praises, offers, 
                                            requests, farewells. See short funny demo videos about what to say in dating, 
                                            relating and job interviews. Non-Profit
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item item xs={12} sm={12} md={8} lg={8}>
                                    <img 
                                        src='./images/listening.SVG' 
                                        width={300} 
                                        height={200} 
                                    />
                                </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card className={classes.courseCard}>
                            <CardContent>
                                <Grid container >
                                <Grid item item xs={12} sm={12} md={4} lg={4} className={classes.courseBox} >
                                <NavLink to={{
                                        pathname:'/CoursesDetails',
                                        state:{courseTitle: dataList[3], courseName: 'Writing Courses'}
                                    }}
                                    style={{textDecorationLine:'none'}}>                                        <Box className={classes.cardInsideBox}>
                                            <Box>
                                                <Typography className={classes.listfontAttrib}>
                                                    Writing
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </NavLink> 
                                    <Box>
                                            <Typography style={{fontSize:11}}>
                                            Very useful selection includes greetings, questions, praises, offers, 
                                            requests, farewells. See short funny demo videos about what to say in dating, 
                                            relating and job interviews. Non-Profit
                                            </Typography>
                                        </Box>
                                </Grid>
                                <Grid item item xs={12} sm={12} md={8} lg={8}>
                                    <img 
                                        src='./images/writing.png' 
                                        width={300} 
                                        height={200} 
                                    />
                                </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
            </Grid>
        </Box>
    )
}

export default Courses
