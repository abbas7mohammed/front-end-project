import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Switch, Divider, Chip, Grid, Container, Stack } from '@mui/material';
import { Box, fontSize } from '@mui/system';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import { TextField } from '@material-ui/core';
import { useLocation} from "react-router-dom"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import CourseInfo from './courseInfo';

//import myData from './dataSet.json';





function CoursesDetails() {


    const location = useLocation();
    const {courseTitle} = location.state;
    const {courseName} = location.state;



    const[courseDetail,setCourseDetail] = useState("");

    const [courses, setCourse] = useState([]);

    const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon />,
          label: 'Very Satisfied',
        },
      };
      
      function IconContainer(props) {
        const { value, ...other } = props;
        return <span  {...other}>{customIcons[value].icon}</span>;
      }
      
      IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
      };

    const searchValue = useRef();

  const [search, setSearch] = useState('');


  const fuse = new Fuse(courseTitle,{
    includeScore : true,
    isCaseSensitive: true,
    keys: [
      'title',
    ]
  })


  const results = fuse.search(search)

  const dataReault = search ? results.map(result => result.item) :courseTitle;

  const onSearch = ()=>{
    setSearch(searchValue.current.value);
  }



  return (
          <Grid container sx={{display: 'flex', flexDirection:'column', backgroundColor:'#F7F9F9'}}>
            <Grid style={{backgroundColor:'#EAEDED' ,display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:70}}>
              <Box style={{width:120,borderRadius:70,backgroundColor:'#A8EB12', margin:20}}>
                  <Typography  style={{fontFamily: 'Comfortaa',padding:3 ,fontWeight:700, fontSize:12}}>
                      Search for course
                  </Typography>
                </Box>
              <Box >
                <TextField
                  id="outlined-size-small"
                  size="small"
                  inputRef={searchValue} 
                  onChange={onSearch}
                  InputProps={{ disableUnderline: true }}
                  style={{backgroundColor:'#FBFCFC', borderRadius:20, padding:5}}
                  />

               </Box>
            </Grid>
            <Grid item style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:30, marginBottom:30}} data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2 }} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
                <Box style={{paddingLeft:10, paddingRight:10}}>
                    <Typography style={{fontFamily: 'Comfortaa', fontSize:12, fontWeight:'bold'}}>
                        {courseName}
                    </Typography>
                </Box>
            <Box style={{backgroundColor:'#EAEDED', width:150, height:2}} 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
                />
            </Grid>
              <Grid container spacing={2} sx={{padding:3, backgroundColor:'#F7F9F9'}} >
              {
              dataReault.map(dataReault=>(
                <Grid item xs={12} sm={4} md={2} lg={2} sx={{display:'flex', justifyContent:'center'}}>
                        <Card style={{ maxWidth: 200, width:180}} key={dataReault.id} sx={{justifyContent:'center'}}>
                        <NavLink to={{
                                    pathname:'/CourseInfo',
                                    state:{
                                      id:dataReault.id, 
                                      courseName: dataReault.courseName, 
                                      courseImg: dataReault.courseImg, 
                                      coursePrice:dataReault.coursePrice,
                                      courseDescrip: dataReault.courseDescrip, 
                                      teacherName: dataReault.teacherName,
                                      teacherSpic: dataReault.teacherSpic,
                                      tacherDescrip: dataReault.tacherDescrip,
                                      teacherImg: dataReault.teacherImg,
                                      whatLearn: dataReault.whatLearn
                                     }
                                }}
                              style={{textDecorationLine:'none'}}>
                          <CardActionArea style={{textDecorationLine:'none', padding:10}}>       
                            <CardMedia
                                component="img"
                                height="140"
                                image={dataReault.courseImg}
                                alt={dataReault.courseName}
                                />
                                <Typography style={{color:'black'}} variant="body2" component="div">
                                    {dataReault.courseName}
                                </Typography>
                          </CardActionArea>
                          </NavLink>
                            <CardContent key={dataReault.id} style={{paddingBottom:20}}>
                                <Box>
                                <Rating
                                    name="highlight-selected-only"
                                    defaultValue={2}
                                    IconContainerComponent={IconContainer}
                                    highlightSelectedOnly
                                    />
                                </Box>
                                <Typography variant="caption" color="text.primary">
                                    {dataReault.coursePrice}$
                                </Typography>
                            </CardContent>
                        
                    </Card>
                </Grid>

              ))
              
          }
        </Grid>    
      </Grid>
        );
}


export default CoursesDetails;