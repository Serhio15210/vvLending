import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import mainStyles from "./First.module.css";

const Main2 = ({setVisibleHeader}) => {
    const { t,i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleLogo, setIsVisibleLogo] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)

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
        <div className={mainStyles.firstContainer}>
            <div
                style={{background: 'linear-gradient(0deg, #111B36 0%, #111B36 100%), linear-gradient(0deg, rgba(15, 33, 59, 0.60) 0%, rgba(15, 33, 59, 0.60) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(15, 33, 59, 0.30) 0%, rgba(15, 33, 59, 0) 100%), linear-gradient(360deg, rgba(15, 33, 59, 0.30) 0%, rgba(15, 33, 59, 0) 100%)',position:'absolute',width:'100%',height:'100%',opacity:0.5,zIndex:1,top:0}}></div>

            <div className={mainStyles.backgroundVideo}>
                <video autoPlay loop muted src="bgVideo2.mp4"/>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
            }}>
            <div className={`${mainStyles.main2Title} ${isVisible?mainStyles.visible:''}`}>
                <img src={"volvevision.svg"} className={`${mainStyles.logo2Text}`}/>
                <span className={`${mainStyles.title2} ${isVisible?mainStyles.visible:''} `}>See everything</span>
            </div>


            <div className={`${mainStyles.contacts} ${isVisibleLogo?mainStyles.visible:''}`}>
                <div className={mainStyles.contactsTitle}>
                    <h1>{t('download')}</h1>
                    <span>the VOLVE VISION app for IOS & Android</span>
                </div>

                <div className={mainStyles.storeIcons}>
                    <a href="" className={mainStyles.storeIcon}>
                        <img src="images/contacts-icons/app-store.png" alt="" />
                    </a>
                    <a href="" className={mainStyles.storeIcon}>
                        <img src="images/contacts-icons/google-play.png" alt="" />
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Main2;