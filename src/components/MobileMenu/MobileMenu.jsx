import React from 'react';

import styles from "./MobileMenu.module.css";
import Logo from "../Logo/Logo";

import {useNavigate} from "react-router-dom";

const MobileMenu = ({openMobile,setOpenMobile}) => {
    const navigate = useNavigate();
    return (
        <div className={`${openMobile?styles.animate:styles.hide}`}>
            <div className={styles.header}>
                <img className={styles.close} src={"images/menuClose.svg"} onClick={()=>setOpenMobile(false)}/>
                <Logo />
                <div></div>
            </div>
            <div className={styles.menuContent} style={{display:openMobile?'flex':'none'}}>
                <p className={`${window.location.pathname==='/about'?styles.active:''}`} onClick={()=>{
                    navigate('/about')
                    setOpenMobile(false)
                }}>About</p>
                <p className={`${window.location.pathname==='/roadmap'?styles.active:''}`} onClick={()=>{
                    navigate('/roadmap')
                    setOpenMobile(false)
                }}>RoadMap</p>
                {/*<p className={`${window.location.pathname==='/lightPaper'?styles.active:''}`} onClick={()=>{*/}
                {/*    navigate('/lightPaper')*/}
                {/*    setOpenMobile(false)*/}
                {/*}}>Lightpaper</p>*/}
                <p className={`${window.location.pathname==='/tokenomic'?styles.active:''}`} onClick={()=>{
                    navigate('/tokenomic')
                    setOpenMobile(false)
                }}>Tokenomic</p>
                <p className={`${window.location.pathname==='/blog'?styles.active:''}`} onClick={()=>{
                    navigate('/blog')
                    setOpenMobile(false)
                }}>Blog</p>
                <p className={`${window.location.pathname==='/cameraStore'?styles.active:''}`} onClick={()=>{
                    navigate('/cameraStore')
                    setOpenMobile(false)
                }} >Camera store</p>
            </div>
            {/*<div className={styles.burger}>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*</div>*/}
        </div>
    );
};

export default MobileMenu;
