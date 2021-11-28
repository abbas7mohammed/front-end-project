import './App.css';
import React, {useEffect,useState } from 'react'

import Courses from './pages/courses/courses';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import app from './pages/firebase.js'
import Footer from './pages/Footer';
import SwipeToSlide from './pages/swiper/Swiper';
import CoursesDetails from './pages/courses/coursesections/courseDetails';
import CourseInfo from './pages/courses/coursesections/courseInfo';
import Notfound from './pages/Notfound';
import Cart from './pages/Cart';



const auth = app.auth();




function App() {

  const [user, setUser] = useState(null)



  useEffect((user)=>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    })
  });

  return (
    <Router>
         <Navbar/>
          <Switch>
           <Route path="/" component={Home} exact />
           <Route path="/Signin" component={Signin} exact />
           <Route path="/Courses" component={Courses} exact />
           <Route path="/Signup" component={Signup} exact />
           <Route path="/Contact" component={Contact} exact />
           <Route path="/CoursesDetails" component={CoursesDetails} exact />
           <Route path="/CourseInfo" component={CourseInfo} exact />
           <Route path="/Cart" component={Cart} exact />
           <Route  component={Notfound}  exact />
           <Route path="/SwipeToSlide" component={SwipeToSlide} exact />

   
          </Switch>  
          <Footer/>  


    </Router>
  );
}

export default App;
