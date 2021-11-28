import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
    




const path = 'data/booksData.json';


const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    }

    const myStyle = makeStyles((them)=>({

      BooksBoxAttrib:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:200, 
        margin:30
       },
       BooksAttrib:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FDFEFE',
       },
  
  }));


const SwipeToSlide = ()=> {
  const classes = myStyle();

  const [Books, setBook] = useState([]);

  useEffect(() => {
    axios.get(path).then(res=>{
     setBook(res.data)
    })
  })

    return (
      <Grid className={classes.BooksBoxAttrib}   xs={10} sm={10} md={12} lg={12}>
         <Slider {...settings} >
           {
             Books.map(Book=>(
                <Box key={Book.id} >
                  <img 
                    src={Book.img} 
                    width={90} 
                    height={100} 
                    component="div"
                  />
                </Box>
             ))
           }
        </Slider>
      </Grid>
    );
  }

export default SwipeToSlide