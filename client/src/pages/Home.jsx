import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import studentRegisterContext from "../context/Register/studentRegisterContext";


import PropTypes from 'prop-types'

const Home = props => {
   const [studentDetails, setStudentDetails] = useState({
     Email: "",
     password: "",
   });
   let history = useHistory();
   const { Email, password } = studentDetails;
   console.log("context", studentRegisterContext);
   const { login, error, clearErrors, isAuthenticated } = useContext(
     studentRegisterContext
   );
   const onchange = (e) => {
     setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
   };

   useEffect(() => {
     // console.log("history is ", props);
     if (isAuthenticated) {
       history.push("/profile");
     }
     if (error) {
       setTimeout(() => {
         clearErrors();
       }, 9000);
     }
   }, [isAuthenticated, error]);

   const onsubmit = (e) => {
     e.preventDefault();
     login({
       Email,
       password,
     });
     clearErrors();
   };

   return (
     <>
       <form onSubmit={onsubmit}>
         <input
           type="email"
           placeholder="Enter your Email"
           onChange={onchange}
           name="Email"
           value={Email}
           required
         />
         <input
           type="password"
           onChange={onchange}
           name="password"
           value={password}
           placeholder="Enter Password"
           required
         />
         <button type="submit">
           <span className="text">submit</span>
         </button>
       </form>
       {error ? (
         <p style={{ color: "red", fontSize: "20px" }}>{error}</p>
       ) : null}
       <p>
         <a
           href="/"
          
         >
           Forgot Password ?
         </a>
       </p>
       <p>
         Dont have an account?{" "}
         <a
           href="/components/innerPages/SignupPage"
          
         >
           Sign Up
         </a>
       </p>
     </>
   );
}

Home.propTypes = {

}

export default Home




