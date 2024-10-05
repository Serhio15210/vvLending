import React from 'react';
import headerStyles from "./GradientButton.module.css";

const GradientButton = ({text,className,onClick}) => {
    return (
        <button className={`${headerStyles.headerButton} ${className}`} onClick={onClick}>{text}</button>
    );
};

export default GradientButton;