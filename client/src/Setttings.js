import React,{useContext,useEffect} from 'react'

import './Settings.css';

// import {Link} from 'react-router-dom'
// import Profile_Settings from './pages/Profile_Settings';
import Student_side_bar from './pages/Student_side_bar';
import Navbar from './layouts/Navbar';
import studentRegisterContext from "./context/Register/studentRegisterContext";



function Setttings(props) { 
    const authContext = useContext(studentRegisterContext);

    useEffect(() => {
      console.log("calling load user ");
      authContext.loadUser();
    }, []);

    return (
      <div>
        <div id="db-wrapper">
          {/* navbar vertical */}
          {/* Sidebar */}
            <Student_side_bar />
          {/* end of sidebar */}
          {/* page content */}
          <div id="page-content">
            <div className="header @@classList">
              {/* navbar */}
             <Navbar/>
             {/* {end of navbar} */}
            </div>
            {/* Container fluid */}
            {props.children}          
           
          </div>
        </div>
      </div>
    );
}

export default Setttings
