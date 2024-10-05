import React from 'react';
import mainStyles from "./DownloadBlock.module.css";
import {useTranslation} from "react-i18next";

const DownloadBlock = () => {
    const { t,i18n } = useTranslation();
    return (
        <div className={`${mainStyles.contacts}`}>
            <div className={mainStyles.contactsTitle}>
                <h1>{t('download')}</h1>
                <p>the VOLVE VISION app for IOS & Android</p>
            </div>

            <div className={mainStyles.storeIcons}>
                <a href="https://play.google.com/store" target={'_blank'} rel="noreferrer"  className={mainStyles.storeIcon}>
                    <img src="images/contacts-icons/google-play.png" alt="" />
                </a>
                <a href="https://www.apple.com/ua/app-store" target={'_blank'} rel="noreferrer" className={mainStyles.storeIcon}>
                    <img src="images/contacts-icons/app-store.png" alt="" />
                </a>

            </div>
        </div>
    );
};

export default DownloadBlock;
