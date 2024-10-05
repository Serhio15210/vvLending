import React, {useState} from 'react';
import styles from "./CameraStore.module.css"
import GradientButton from "../../components/GradientButton/GradientButton";
import DownloadBlock from "../../components/DownloadBlock/DownloadBlock";
import SubscribeModal from "../../components/SubscribeModal/SubscribeModal";
import FeatureConstruction from "../../components/FeatureConstruction/FeatureConstruction";
const CameraStore = () => {

    return (
        <div className={styles.container}>

             <FeatureConstruction/>
            <DownloadBlock/>
        </div>
    );
};

export default CameraStore;
