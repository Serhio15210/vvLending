import React, {useEffect, useState} from "react";
import mainStyles from "./First.module.css";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

export default function Main({setVisibleHeader,visibleHeader}) {
  const { t,i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleLogo, setIsVisibleLogo] = useState(false);
    const [isHideLogo, setIsHideLogo] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        // setVisibleHeader(false);
        if (window.innerWidth>780) {
            const timeoutId = setTimeout(() => {
                setIsVisible(true);
                setVisibleHeader(true);
            }, 1000);
            const timeoutLogo = setTimeout(() => {
                // setVisibleHeader(true);
                setIsVisibleLogo(true);

            }, 2000); // Затримка в 3 секунди
            return () => {
                clearTimeout(timeoutId);
                clearTimeout(timeoutLogo);
            };
        }else{
            const timeoutId = setTimeout(() => {
                setIsVisible(true);
                setIsVisibleLogo(true);
                setVisibleHeader(true);
            }, 1000);
            const timeoutLogo = setTimeout(() => {
                setIsHideLogo(true)

            }, 1500); // Затримка в 3 секунди
            const timeoutHeader = setTimeout(() => {
                // setVisibleHeader(true);
            }, 2000); // Затримка в 3 секунди
            return () => {
                clearTimeout(timeoutId);
                clearTimeout(timeoutLogo);
                clearTimeout(timeoutHeader);
            };
        }
    }, []);

  return (
      <div className={mainStyles.firstContainer}>
          <div
              style={{background: 'linear-gradient(0deg, #111B36 0%, #111B36 100%), linear-gradient(0deg, rgba(15, 33, 59, 0.60) 0%, rgba(15, 33, 59, 0.60) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(15, 33, 59, 0.30) 0%, rgba(15, 33, 59, 0) 100%), linear-gradient(360deg, rgba(15, 33, 59, 0.30) 0%, rgba(15, 33, 59, 0) 100%)',position:'absolute',width:'100%',height:'100%',opacity:0.5,zIndex:1,top:0}}></div>

          <div className={mainStyles.backgroundVideo} dangerouslySetInnerHTML={{
              __html:`<video autoPlay loop muted playsInline preload="auto" src="bgVideo.mp4"/>`
          }}>

          </div>
          <div style={{
              maxWidth:1180,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
              // background:'red',
              padding:"0 20px 0 20px"

          }}>
          <img src={"images/logo/Logo-white.svg"} className={`${mainStyles.logo} ${isVisibleLogo?mainStyles.visible:''} ${isHideLogo?mainStyles.translate:''}`}/>
          <span className={`${mainStyles.title} ${isVisible?mainStyles.visible:''} ${isVisibleLogo?mainStyles.font:''} ${isHideLogo?mainStyles.translate:''}`}>See everything</span>

              <div className={`${mainStyles.contacts} ${visibleHeader?mainStyles.visible:''}`}>
              <div className={mainStyles.contactsTitle}>
                   <h1>{t('download')}</h1>
                  <span>the VOLVE VISION app for IOS & Android</span>
              </div>

              <div className={mainStyles.storeIcons}>
                  <a href="" className={mainStyles.storeIcon}>
                      <img src="images/contacts-icons/google-play.png" alt="" />
                  </a>
                  <a href="" className={mainStyles.storeIcon}>
                      <img src="images/contacts-icons/app-store.png" alt="" />
                  </a>

              </div>
          </div>
          </div>
      </div>

  );
}
