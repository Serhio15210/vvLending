import React from 'react';
import styles from "./SubscribeModal.module.css";
import GradientButton from "../GradientButton/GradientButton";

const SuccessSendModal = ({setIsOpen}) => {
    return (
        <>
            <p className={styles.title}>Thanks for <br/> your sending</p>
            <p className={styles.text}>We will send you an offer soon</p>

            <GradientButton text={'Close'} className={styles.button} onClick={()=>setIsOpen(false)}/>
        </>
    );
};

export default SuccessSendModal;
