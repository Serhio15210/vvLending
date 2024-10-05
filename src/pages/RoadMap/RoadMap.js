import React from 'react';
import styles from "./RoadMap.module.css"
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import DownloadBlock from "../../components/DownloadBlock/DownloadBlock";

const RoadMap = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.title}>RoadMap & Lightpaper</p>
                <p className={styles.text}>Volve Vision is the first and only Web3 ecosystem of its kind that combines
                    the best features of video surveillance systems, online video streaming, and Web3 technologies. Get
                    access to nearly unlimited information about your city, interesting places, and events around the
                    world, as well as a wide range of tools.</p>
            </div>
             <Step1/>
            <Step2/>
            <Step3/>
            <Step4/>
            <DownloadBlock/>
        </div>
    );
};

export default RoadMap;