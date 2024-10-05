import React, {useEffect, useRef, useState} from 'react';
import styles from "./Step.module.css";
import {gsap} from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);
const Step1 = () => {
    const roads = [{
        title: 'Site release',
        text: 'Public presentation of the project site on which the ecosystem is being built.',
        styles: styles.roadItem1,
        icon: '/images/roadmap/step1/road1.svg'
    },
        {
        title: 'Testing on Android and iOS',
        text: 'Testing the software for accessing the ecosystem by the development team and focus groups.',
        styles: styles.roadItem2,
        icon: '/images/roadmap/step1/road2.svg'
    }, {
        title: 'Non-custodial wallet',
        text: 'Launch of the first version of a non-custodial crypto-wallet, which will be used for transactions within the ecosystem and to accumulate user benefits.',
        styles: styles.roadItem3,
        icon: '/images/roadmap/step1/road3.svg'
    }, {
        title: 'Pilot camera testing',
        text: 'Testing cameras connected to the ecosystem software, including mobile applications, as well as dedicated servers, by the development team and focus groups.',
        styles: styles.roadItem4,
        icon: '/images/roadmap/step1/road4.svg'
    }, {
        title: 'Mobile app closed beta',
        text: 'Thorough testing of the mobile application on Android and iOS. Access to testing will be drawn from the Volve Vision ecosystem community.',
        styles: styles.roadItem5,
        icon: '/images/roadmap/step1/road5.svg'
    }, {
        title: 'Private tokenomics presentation',
        text: 'Presentation of the mathematical and economic model of the Volve Vision ecosystem as a whole, including the mathematical and economic model of the VV token. Analysis of possible ways the token may behave for institutional investors.',
        styles: styles.roadItem6,
        icon: '/images/roadmap/step1/road6.svg'
    }
    ]
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
        <div className={styles.step}>
            <div className={styles.stepTitle}>
                <img src={"/images/roadmap/step.svg"}/>
                <p>Step 1</p>
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
                                     });}}>
                                <p className={`${item.title.length < 20 ? styles.short : ''}`}>{item.title}</p>
                                <img className={`${styles.platform}`} src={"/images/roadmap/platform.svg"}/>
                                <img className={`${styles.icon} ${index===2?styles.icon33:''}`} src={item.icon}/>
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

export default Step1;