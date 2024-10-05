import React, {useState} from 'react';
import styles from "./Tokenomic.module.css"
import GradientButton from "../../components/GradientButton/GradientButton";
import Slider, {SliderThumb, SliderValueLabelProps} from '@mui/material/Slider';
import DownloadBlock from "../../components/DownloadBlock/DownloadBlock";
import SubscribeModal from "../../components/SubscribeModal/SubscribeModal";
import {format} from 'date-fns';

const labels = ['A', 'B', 'C', 'D'];
const Tokenomic = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [openModal, setOpenModal] = useState(false)
    const getProgress = () => {
        const endDate = new Date(currentDate.getFullYear()+1, 0, 1);
        const now = currentDate;
        const daysRemaining = Math.max(0, Math.ceil((endDate - now) / (1000 * 60 * 60 * 24)));

        // Розраховуємо відсоток прогресу
        const totalDays = 365;
        const progress = ((totalDays - daysRemaining) / totalDays) * 100;
        // console.log(endDate.getUTCMonth())
        return Math.round(parseFloat(progress) * 100) / 100
    }
    console.log(getProgress())

    return (
        <div className={styles.container}>
            {openModal && <SubscribeModal isOpen={openModal} setIsOpen={setOpenModal}/>}
            <p className={styles.title}>A round of private<br/>
                investment is currently<br/>
                underway</p>
            <p className={styles.text}>
                If you are a private institutional investor interested<br/>
                in cooperation - contact us</p>
            <GradientButton text={'Contact us and invest now'} className={styles.button}
                            onClick={() => setOpenModal(true)}/>
            {/*<div  className={styles.range}>*/}
            {/*    <input*/}
            {/*        type="range"*/}
            {/*        min={0}*/}
            {/*        max={100}*/}
            {/*        step={1}*/}
            {/*        style={{height:20,width:'100%'}}*/}

            {/*    />*/}
            {/*</div>*/}
            <div   className={styles.rangeBlock}>
                <Slider className={styles.range} disabled defaultValue={getProgress()} aria-label="Default"
                        valueLabelDisplay="on"
                        valueLabelFormat={(value) => <div className={styles.label}>
                            <p>{getProgress()}%</p>
                            <p>for others</p>
                            {/*<span>starts {format(currentDate, 'dd/MM/yyyy')}</span>*/}
                        </div>}/>

                <p   className={styles.marker} style={{left:0}}>{`01.01.${new Date().getFullYear()}`}</p>
                <p  className={styles.marker} style={{right:0}}>{`01.01.${new Date().getFullYear() + 1}`}</p>

            </div>

            <DownloadBlock/>

        </div>
    );
};

export default Tokenomic;
