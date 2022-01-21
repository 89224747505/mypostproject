import React from 'react';
import classes from "./MyTextArea.module.css";

const MyTextArea = (props) => {
    return (
        <textarea className={classes.areaContent} {...props}/>
    );
};

export default MyTextArea;