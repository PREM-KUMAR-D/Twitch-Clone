import React from "react";
import logoPlaceHolder from '/logoPlaceholder.svg';
import classes from './Logo.module.css';

export const Logo= ({text})=>{
    return(<div className={classes.logoContainer}>
        <img src={logoPlaceHolder}></img>
        <span>&nbsp;&nbsp;{text}</span>
    </div>)
}