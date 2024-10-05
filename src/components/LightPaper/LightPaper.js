import React from 'react';
import mainStyles from "../Main/Main.module.css";
import {useTranslation} from "react-i18next";

const LightPaper = () => {
    const { t,i18n } = useTranslation();
    return (
        <div className={mainStyles.mainContainer}>
            <div className={mainStyles.mainLogo}>
                <div className={mainStyles.robot}>
                    <img src="images/robot-lays.png" alt="" />
                </div>
                <div className={mainStyles.neonText}>
                    <img src="images/vvNeonMain.png" alt="" />
                </div>
            </div>

            <button className={mainStyles.tryFreeBtn}>TRY FOR FREE</button>

            <div className={mainStyles.contacts}>
                <div className={mainStyles.contactsTitle}>
                    <div></div> <h1>{t('contact')}</h1> <div></div>
                </div>

                <ul>
                    <li>
                        <a
                            href=" https://twitter.com/VolveVision"
                            target="_blank"
                            rel="noreferrer"
                        >
              <span className={mainStyles.contactIcon}>
                <img src="images/contacts-icons/twitter.svg" alt="" />
              </span>
                            {t('twitter')}
                        </a>
                    </li>
                    <li>
                        <a href="mailto:volve.vision@gmail.com">
              <span className={mainStyles.contactIcon}>
                <img src="images/contacts-icons/mail.svg" alt="" />
              </span>
                            volve.vision@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+380 67 489 73 73">
              <span className={mainStyles.contactIcon}>
                <img src="images/contacts-icons/phone.svg" alt="" />
              </span>
                            +380 67 489 73 73
                        </a>
                    </li>
                </ul>

                <div className={mainStyles.download}>
                    <h2>{t('download')}</h2>
                    <p>{t('theVolveVision')}</p>
                </div>

                <div className={mainStyles.storeIcons}>
                    <a href="https://www.apple.com/ua/app-store" target="_blank"
                       rel="noreferrer" className={mainStyles.storeIcon}>
                        <img src="images/contacts-icons/app-store.png" alt="" />
                    </a>
                    <a href="https://play.google.com/store" target="_blank"
                       rel="noreferrer" className={mainStyles.storeIcon}>
                        <img src="images/contacts-icons/google-play.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LightPaper;
