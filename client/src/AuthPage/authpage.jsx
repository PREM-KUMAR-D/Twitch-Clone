import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

import classes from './authpage.module.css';

const AuthPage =()=>{

    const [isLogin , setIsLogin] = useState(true);

    const handleAuthPageToggle = ()=>{
        setIsLogin((prev)=> !prev);
    }

    
    return (<div className={classes.authContainer}>

        {isLogin ?
         <Login switchAuthHanlder={handleAuthPageToggle} /> : 
         <Register switchAuthHanlder={handleAuthPageToggle} />}

        
    </div>)
}

export default AuthPage;