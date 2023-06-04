import React from "react";
import {Link} from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = ({addStyles}) => {
    return(
        <>
            <Link className={[styles.logo, addStyles].join(' ') } to = '/'>LOGOS</Link>
        </>
    )
}


export default Logo;