import React, {useRef, useState} from 'react';
import styles from "./Step.module.css";
import {gsap} from "gsap";

const Step3 = () => {
    const roads = [{
        title: 'IDO',
        text: 'The VV token offering will be conducted on several decentralized exchanges, and liquidity pools will be created.',
        styles: styles.roadItem1,
        icon: '/images/roadmap/step3/road1.svg'
    }, {
        title: 'Smart contract presentation',
        text: 'Public disclosure of the conditions of the smart contracts used to facilitate the Volve Vision ecosystem.',
        styles: styles.roadItem2,
        icon: '/images/roadmap/step3/road2.svg'
    }, {
        title: 'Referral program',
        text: 'Public disclosure of the conditions of the referral program, including the results of the user snapshot, rewards for engaging community members, and rewards for participation in testing and test events.',
        styles: styles.roadItem3,
        icon: '/images/roadmap/step3/road3.svg'
    }, {
        title: 'VV token listing (DEX, CEX)',
        text: 'Public listing of the VV token on decentralized and centralized exchanges, as well as other financial platforms.',
        styles: styles.roadItem4,
        icon: '/images/roadmap/step3/road4.svg'
    }, {
        title: 'Ecosystem launch in target countries',
        text: 'Launching the Volve Vision ecosystem in the targeted countries, considering the adaptation of the ecosystem to the legislation of those countries.',
        styles: styles.roadItem5,
        icon: '/images/roadmap/step3/road5.svg'
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
                <p>Step 3</p>
            </div>
            <div className={styles.stepBlock}>
                <div className={styles.roadContent1}>
                    <div className={`${styles.roadItem}`}  onMouseEnter={() => handleHover(roads[0].text)}
                         onMouseLeave={() => {
                             gsap.to(textRef.current, {
                                 text: '',
                                 opacity: 0,
                                 duration: 0.2,
                             });}}>
                        <p  className={styles.short}>{roads[0].title}</p>

                        <img className={styles.shine}   src={"/images/roadmap/road1Shining.svg"} />
                        <img className={styles.shadow}   src={"/images/roadmap/road1Shadow.svg"} />
                        <img className={styles.platform}   src={"/images/roadmap/platform.svg"} />
                        <img className={styles.icon}   src={roads[0].icon} />

                    </div>
                    <div className={`${styles.roadItem} ${styles.roadItem2}`} onMouseEnter={() => handleHover(roads[1].text)}
                         onMouseLeave={() => {
                             gsap.to(textRef.current, {
                                 text: '',
                                 opacity: 0,
                                 duration: 0.2,
                             });}} >
                        <p  >{roads[1].title}</p>
                        <img className={styles.platform}   src={"/images/roadmap/platform.svg"} />
                        <img className={styles.shadow}  src={"/images/roadmap/road1Shadow.svg"} />
                        <img className={styles.shine}   src={"/images/roadmap/road1Shining.svg"} />
                        {/*<img style={{width: 171, height: 105, left: 178.50, top: 146.50, position: 'absolute'}} src={"/images/roadmap/roadLid.svg"} />*/}
                        <img className={`${styles.icon} ${styles.icon33}`}   src={roads[1].icon} />

                    </div>

                    <div className={`${styles.roadItem} ${styles.roadItem3}`}  onMouseEnter={() => handleHover(roads[2].text)}
                         onMouseLeave={() => {
                             gsap.to(textRef.current, {
                                 text: '',
                                 opacity: 0,
                                 duration: 0.2,
                             });}}>
                        <p  >{roads[2].title}</p>
                        <img className={styles.shine}   src={"/images/roadmap/road1Shining.svg"} />
                        <img className={styles.shadow}   src={"/images/roadmap/road1Shadow.svg"} />
                        <img className={styles.platform}   src={"/images/roadmap/platform.svg"} />
                        <img className={`${styles.icon} ${styles.icon33}`}  src={roads[2].icon} />

                    </div>
                    <div className={`${styles.roadItem} ${styles.roadItem4}`}  onMouseEnter={() => handleHover(roads[3].text)}
                         onMouseLeave={() => {
                             gsap.to(textRef.current, {
                                 text: '',
                                 opacity: 0,
                                 duration: 0.2,
                             });}}>
                        <p  >{roads[3].title}</p>
                        <img className={styles.shadow}  src={"/images/roadmap/road1Shadow.svg"} />
                        <img className={styles.platform}   src={"/images/roadmap/platform.svg"} />
                        <img className={styles.shine}   src={"/images/roadmap/road1Shining.svg"} />
                        {/*<img className={styles.lid} src={"/images/roadmap/roadLid.svg"} />*/}
                        <img className={styles.icon}   src={roads[3].icon} />

                    </div>

                    <div className={`${styles.roadItem} ${styles.roadItem5}`}  onMouseEnter={() => handleHover(roads[4].text)}
                         onMouseLeave={() => {
                             gsap.to(textRef.current, {
                                 text: '',
                                 opacity: 0,
                                 duration: 0.2,
                             });}}>
                        <p  >{roads[4].title}</p>
                        <img className={styles.platform}   src={"/images/roadmap/platform.svg"} />
                        <img className={styles.shadow}   src={"/images/roadmap/road1Shadow.svg"} />
                        <img className={styles.shine}   src={"/images/roadmap/road1Shining.svg"} />
                        {/*<img style={{width: 171, height: 105, left: 178.50, top: 146.50,position:'absolute'}} src={"/images/roadmap/roadLid.svg"} />*/}
                        <img className={`${styles.icon} ${styles.icon33}`}   src={roads[4].icon} />

                    </div>
                    <div className={`${styles.roadItem} ${styles.roadItem6}`}  >
                        {/*<p style={{left: 345, top: 65}}>Site release</p>*/}
                        {/*<img className={styles.shadow} style={{left: 0, top: 0}} src={"/images/roadmap/road1Shadow.svg"} />*/}
                        {/*<img className={styles.platform} style={{left: 79, top: 141}} src={"/images/roadmap/platform.svg"} />*/}
                        {/*<img className={styles.shine} style={{left: 94.50, top: 35}} src={"/images/roadmap/road1Shining.svg"} />*/}
                        {/*<img className={styles.icon} style={{left: 155, top: 102}} src={"/images/roadmap/step2/road6.svg"} />*/}

                    </div>
                </div>
                <div className={styles.overview}>
                    <img src={"images/stepOverviewTriangle.svg"}/>
                    <p ref={textRef}></p>
                </div>
            </div>
        </div>
    );
};

export default Step3;