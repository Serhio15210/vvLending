import React from "react";
import logoStyles from "./Logo.module.css";

export default function Logo({onClick=()=>{}}) {
  return (
    <div className={logoStyles.logoContainer} onClick={onClick}>
      <img src="images/logo/Logo-image.svg" alt="" />
    </div>
  );
}
