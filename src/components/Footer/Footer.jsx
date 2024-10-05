import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import styles from "./Footer.module.css";
import {useLocation, useNavigate} from "react-router-dom";

const Footer = () => {
    const { t,i18n } = useTranslation();
    const [showFull,setShowFull]=useState(true)
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        setShowFull(location.pathname!=='/lightPaper')
    },[location])
    const handleDownload = (fileUrl) => {
        window.open(fileUrl, '_blank');

    };
    return (
        showFull? <div className={styles.footerContainer}>
            <img src="images/logo/Logo-image.svg" alt="" />
            <div className={styles.content}>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Whitepaper</span>
                    <div className={styles.columnText}>
                        <a onClick={()=>handleDownload('/documents/LightPaper eng.pdf')}>Lightpaper</a>
                        <a onClick={()=>navigate('/roadmap')}>Road map</a>
                    </div>
                </div>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Legal</span>
                    <div className={styles.columnText}>
                        <a onClick={()=>handleDownload('/documents/Rules.pdf')}>Rules</a>
                        <a onClick={()=>handleDownload('/documents/PRIVACY-POLICY.pdf')}>Privacy Policy</a>
                    </div>
                </div>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Contact us</span>
                    <div className={styles.columnText}>
                        <a href="tel:+380 67 489 73 73">+380954897373</a>
                        <a href="mailto:volve.vision@gmail.com">volve.vision@gmail.com</a>
                    </div>
                </div>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Social</span>
                    <div className={styles.columnText}>
                        <a href="https://twitter.com/VolveVision" target="_blank"
                           rel="noreferrer">Twitter</a>
                        <a href="https://instagram.com/volve.vision?igshid=MzRlODBiNWFlZA==" target="_blank"
                           rel="noreferrer">Instagram</a>
                        <a href="https://www.tiktok.com/@volvevision?_t=8eX6kKruXWn" target="_blank"
                           rel="noreferrer">Tiktok</a>
                        <a href="https://www.youtube.com/channel/UC7H_paAhVtcpW8EnIMRvC-g" target="_blank"
                           rel="noreferrer">Youtube</a>
                        <a href="https://discord.gg/7c85Hmzc" target="_blank"
                           rel="noreferrer">Discord</a>
                    </div>
                </div>
            </div>
            <span className={styles.copyRight}>{t('copyRight')}</span>
        </div>:<span className={styles.copyRight}>{t('copyRight')}</span>
    );
};

export default Footer;
