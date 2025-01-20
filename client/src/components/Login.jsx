import React from "react";
import classes from './Login.module.css';
import { Logo } from "./Logo";

const Login =({switchAuthHanlder})=>{

    return (
        <div className={classes.loginContainer} >
            <Logo text={'Login to Twitch clone'}/>
            <form >
                form
            </form>
            <span onClick={switchAuthHanlder}> Don't have an account add account later</span>
            
        </div>
    )


}

export default Login;