import React, {useEffect, useState} from "react";
import Logo from "../Logo/Logo";
import headerStyles from "./Header.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const navigate = useNavigate();
  const { t,i18n } = useTranslation();
  const [openMobile,setOpenMobile]=useState(false)
  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMobile]);
  return (
      <div>
    <div className={headerStyles.header}>
      <div className={`${headerStyles.mobileMenu} ${openMobile?headerStyles.open:''}`}>
         <MobileMenu setOpenMobile={setOpenMobile} openMobile={openMobile}/>
      </div>

      <div className={headerStyles.headerContainer}>
        <div className={`${headerStyles.burger} ${openMobile?headerStyles.hide:''}`} onClick={()=>{
          setOpenMobile(true)}}>
          {/*<span></span>*/}
          <img src={"images/burgerMenu.svg"}/>
        </div>
        <Logo onClick={()=>navigate('/')}/>

        <ul className={headerStyles.naviList}>
          <li className={`${window.location.pathname==='/about'?headerStyles.active:''}`} onClick={()=>navigate('/about')}>{t('about')}</li>
          {/*<li className={`${window.location.pathname==='/lightPaper'?headerStyles.active:''}`} onClick={()=>navigate('/lightPaper')}>{t('lightPaper')}</li>*/}
          <li className={`${window.location.pathname==='/roadmap'?headerStyles.active:''}`} onClick={()=>navigate('/roadmap')}>{t('roadmap')}</li>
          <li className={`${window.location.pathname==='/tokenomic'?headerStyles.active:''}`} onClick={()=>navigate('/tokenomic')}>{t('tokenomic')}</li>
          <li className={`${window.location.pathname==='/blog'?headerStyles.active:''}`} onClick={()=>navigate('/blog')}>{t('blog')}</li>
          <li className={`${window.location.pathname==='/cameraStore'?headerStyles.active:''}`} onClick={()=>navigate('/cameraStore')}>{t('camera store')}</li>
        </ul>

        <button className={headerStyles.headerButton} onClick={()=>window.location.href ='https://play.google.com/store'}>{t('JOIN VOLVE VISION')}</button>
        {/*<div className={headerStyles.localizationHidden}>*/}
        {/*  <p className={`${i18n.language==='en'&&headerStyles.localizationActive}`} onClick={()=>i18n.changeLanguage('en')}>en</p>*/}
        {/*  <p className={`${i18n.language==='ua'&&headerStyles.localizationActive}`} onClick={()=>i18n.changeLanguage('ua')}>ua</p>*/}
        {/*</div>*/}
      </div>

    </div>
        {/*<div className={headerStyles.localization}>*/}
        {/*  <p className={`${i18n.language==='en'&&headerStyles.localizationActive}`} onClick={()=>i18n.changeLanguage('en')}>en</p>*/}
        {/*  <p className={`${i18n.language==='ua'&&headerStyles.localizationActive}`} onClick={()=>i18n.changeLanguage('ua')}>ua</p>*/}
        {/*</div>*/}
      </div>
  );
}
