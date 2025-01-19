import React from "react";
import classes from './Login.module.css';

const Login =({switchAuthHanlder})=>{

    return (
        <div className={classes.loginContainer} >
            <p>Logo </p>
            <form >
                form
            </form>
            <span onClick={switchAuthHanlder}> Don't have an account add account later</span>
            
        </div>
    )


}

export default Login;