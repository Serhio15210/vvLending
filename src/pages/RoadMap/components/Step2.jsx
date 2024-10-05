import React, {useRef, useState} from 'react';
import styles from "./Step.module.css";
import {gsap} from "gsap";

const Step2 = () => {
    const roads = [{
        title: 'Ecosystem launch',
        text: 'Full-fledged launch of the Volve Vision ecosystem with all its elements, including monetization of the video stream, the ability to view and manage the video stream, etc., as outlined in the whitepaper.',
        styles: styles.roadItem1,
        icon: '/images/roadmap/step2/road1.svg'
    }, {
        title: 'Public mobile app launch',
        text: 'Full-fledged launch of a mobile application for mass users with extended functionality for surveillance camera owners.',
        styles: styles.roadItem2,
        icon: '/images/roadmap/step2/road2.svg'
    }, {
        title: 'Mobile app open beta',
        text: 'Thorough testing of the mobile application on Android and iOS for all users.',
        styles: styles.roadItem3,
        icon: '/images/roadmap/step2/road3.svg'
    }, {
        title: 'Wallet update',
        text: 'Updates to the wallet capabilities, including the ability to hold NFTs.',
        styles: styles.roadItem4,
        icon: '/images/roadmap/step2/road4.svg'
    }, {
        title: 'Public tokenomics presentation',
        text: 'Presentation of the mathematical and economic model of the Volve Vision ecosystem as a whole, including the mathematical and economic model of the VV token. Analysis of possible ways the token may behave for all stakeholders.',
        styles: styles.roadItem5,
        icon: '/images/roadmap/step2/road5.svg'
    }, {
        title: 'User snapshot',
        text: 'A snapshot of users\' activities in the previous stages for further benefit accrual.',
        styles: styles.roadItem6,
        icon: '/images/roadmap/step2/road6.svg'
    }]
    const [selectStage, setSelectStage] = useState(null)
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    const handleHover = (newText) => {
        gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.1,
            onComplete: () => {
                gsap.to(textRef.current, {
                    text: newText,
                    duration: 0.9,
                    opacity: 1,
                    ease: 'power2.out',
                });
            },
        });
    };

    return (
        <div className={`${styles.step} ${styles.step2}`}>
            <div className={styles.stepTitle}>
                <img src={"/images/roadmap/step.svg"}/>
                <p>Step 2</p>
            </div>
            <div className={styles.stepBlock}>

                <div className={styles.roadContent1}>

                    {roads.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.roadItem} ${item.styles}`}
                                 onMouseEnter={() => handleHover(roads[index].text)}
                                 onMouseLeave={() => {
                                     gsap.to(textRef.current, {
                                         text: '',
                                         opacity: 0,
                                         duration: 0.2,
                                     });
                                 }}>
                                <p className={`${item.title.length < 20 ? styles.short : ''}`}>{item.title}</p>
                                <img className={`${styles.platform}`} src={"/images/roadmap/platform.svg"}/>
                                <img className={`${styles.icon} ${index===3?styles.icon33:''}`} src={item.icon}/>
                                <img className={`${styles.shine}`} src={"/images/roadmap/road1Shining.svg"}/>
                                <img className={`${styles.shadow}`} src={"/images/roadmap/road1Shadow.svg"}/>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.overview}>
                    <img src={"images/stepOverviewTriangle.svg"}/>
                    <p ref={textRef}></p>
                </div>

            </div>
        </div>
    );
};

export default Step2;