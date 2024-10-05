import React from 'react';
import mainStyles from "./Privacy.module.css";
import {useTranslation} from "react-i18next";

const Privacy = () => {
  const { t,i18n } = useTranslation();
  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank');
    // const link = document.createElement('a');
    // link.href = fileUrl;
    // link.setAttribute('download', 'PRIVACY POLICY.docx');
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };
  return (
    <div className={mainStyles.mainContainer}>

      <div className={mainStyles.contactsTitle}>
         <h1>{t('privacyOrRules')}</h1>
      </div>
      <div style={{width:'100%'}}>
        <h1>{t('privacy')}</h1>
        <p onClick={()=>handleDownload('/documents/PRIVACY-POLICY.pdf')}>PRIVACY POLICY</p>
        <p onClick={()=>handleDownload('/documents/ПОЛІТИКА-КОНФІДЕНЦІЙНОСТІ.pdf')}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</p>
        <h1>{t('rules')}</h1>
        <p onClick={()=>handleDownload('/documents/Rules.pdf')}>RULES</p>
        <p onClick={()=>handleDownload('/documents/Правила_1.pdf')}>ПРАВИЛА</p>

      </div>

    </div>
  );
};

export default Privacy;
