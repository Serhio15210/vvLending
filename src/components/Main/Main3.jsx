import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import mainStyles from "./First.module.css";

const Main3 = ({setVisibleHeader}) => {
    const {t, i18n} = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleLogo, setIsVisibleLogo] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        // setVisibleHeader(false);
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        const timeoutLogo = setTimeout(() => {
            setIsVisibleLogo(true);
            setVisibleHeader(true);
        }, 6000); // Затримка в 3 секунди
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timeoutLogo);
        };
    }, []);

    return (
        <div className={mainStyles.thirdContainer}>
            <div
                style={{
                    background: 'linear-gradient(0deg, #111B36 0%, #111B36 100%), linear-gradient(0deg, rgba(15, 33, 59, 0.60) 0%, rgba(15, 33, 59, 0.60) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(15, 33, 59, 0.30) 0%, rgba(15, 33, 59, 0) 100%), linear-gradient(360deg, rgba(15, 33, 59, 0.30) 0%, rgba(15, 33, 59, 0) 100%)',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0.5,
                    zIndex: 1,
                    top: 0
                }}></div>

            <div className={mainStyles.backgroundVideo}>
                <video autoPlay muted src="bgVideo.mp4"/>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
            }}>
                <img src={"images/logo/Logo-white.svg"} style={{filter: 'drop-shadow(0 -0.75rem 1.75rem #0AF)',marginBottom:66}}
                     className={`${mainStyles.logo} ${isVisibleLogo ? mainStyles.visible : ''}`}/>
                <span
                    className={`${mainStyles.title3} ${isVisible ? mainStyles.visible : ''} ${isVisibleLogo ? mainStyles.font : ''}`}>See everything</span>
                <div className={`${mainStyles.contacts} ${isVisibleLogo ? mainStyles.visible : ''}`} style={{marginTop:317}}>
                    <div className={mainStyles.contactsTitle}>
                        <h1>{t('download')}</h1>
                        <span>the VOLVE VISION app for IOS & Android</span>
                    </div>

                    <div className={mainStyles.storeIcons}>
                        <a href="" className={mainStyles.storeIcon}>
                            <img src="images/contacts-icons/app-store.png" alt=""/>
                        </a>
                        <a href="" className={mainStyles.storeIcon}>
                            <img src="images/contacts-icons/google-play.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main3;