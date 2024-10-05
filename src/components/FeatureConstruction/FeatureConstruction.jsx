import React, {useState} from 'react';
import styles from "../../pages/CameraStore/CameraStore.module.css";
import GradientButton from "../GradientButton/GradientButton";
import SubscribeModal from "../SubscribeModal/SubscribeModal";

const FeatureConstruction = () => {
    const [openModal,setOpenModal]=useState(false)
    return (
        <>
            {openModal&&<SubscribeModal isOpen={openModal} setIsOpen={setOpenModal}/>}

        <div className={styles.content}>
            <img src={"/images/robot-store.svg"}/>
            <div className={styles.info}>
                <p className={styles.title}>The feature<br/>
                    is under<br/>
                    construction</p>
                <p>Expect according to the Roadmap</p>
                <GradientButton text={'Subscribe our news'} className={styles.button} onClick={()=>setOpenModal(true)} />
            </div>

        </div>
        </>
    );
};

export default FeatureConstruction;
