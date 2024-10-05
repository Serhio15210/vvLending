import React from 'react';
import styles from "./About.module.css"
import GradientButton from "../../components/GradientButton/GradientButton";
import DownloadBlock from "../../components/DownloadBlock/DownloadBlock";
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleDownload = (fileUrl) => {
        window.open(fileUrl, '_blank');

    };
    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <div className={styles.column}>
                    <h1 className={styles.title}>Our team is pleased to present the Volve Vision to you</h1>
                    <p className={`${styles.text} ${styles.paragraph}`}  >Volve Vision is the first and only Web3 ecosystem of its kind that
                        combines the best features of video surveillance systems, online video streaming, and Web3
                        technologies. Get access to nearly unlimited information about your city, interesting places,
                        and events around the world, as well as a wide range of tools for processing interesting video
                        streams.
                        <br/>
                    </p>
                    <br/>
                    <p className={`${styles.text} ${styles.paragraph}`}  >Our team has developed a comprehensive project development concept,
                        invested in and developed the software that ensures the functioning of the ecosystem, conducted
                        market research, and formulated a marketing strategy. An important achievement of the Volve
                        Vision’s team is the development of a financial project model based on principles of
                        profitability, creating added value, risk diversification, and self-regulation.</p>

                </div>
                <img className={styles.robot} src={"/images/robot-about.svg"}/>
            </div>
            <div className={styles.facts}>
                <div className={styles.column}>
                    <h1 className={styles.title2}>Some facts<br/>
                        about Volve Vision:</h1>
                    <div className={styles.factsBlock}>
                        <p className={styles.factTitle}>
                            Volve Vision Ecosystem
                        </p>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>The app is just the tip of the iceberg that is the Volve Vision ecosystem - an innovative
                                multiplatform that this app provides access to.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Created for owners of video surveillance cameras and webcams, it allows them to stream
                                video and receive cryptocurrency for each broadcast.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>It allows users to view the streamed video and process it as well.</p>
                        </div>
                    </div>
                    {/*///////////////////////////////////////////*/}
                    <div className={styles.factsBlock}>
                        <p className={styles.factTitle}>
                            Value Proposition
                        </p>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Volve Vision aims to make people's lives more comfortable, safer, and expand their
                                horizons.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Get information with just one click about traffic on the road before traveling,
                                availability of free parking spaces near the supermarket, and much more.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Even without the ability to install video surveillance on your own, keep an eye on your
                                car in the parking lot, your business operations, or what your children are doing in the
                                yard.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Become a participant in interesting and spectacular events, such as sports races or
                                carnivals, without leaving your living room.</p>
                        </div>
                    </div>
                    {/*///////////////////////////////////////////*/}
                    <div className={styles.factsBlock}>
                        <p className={styles.factTitle}>
                            Accessibility
                        </p>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Access to Volve Vision is completely free for both owners of video surveillance cameras
                                and webcams and users.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Watch live video streams according to your needs.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>If necessary, purchase premium access to the app, which provides a wide range of
                                features, such as video rewinding (including slow or fast motion), image zooming, saving
                                videos with event timing, and in the future - object recognition, license plates, and
                                other details of the broadcast.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>If you are a camera owner, join the Volve Vision family by streaming video and receiving bonuses.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Purchase a SEASONPASS and earn VV tokens for every minute of your broadcast. Exchange them for real money.</p>
                        </div>
                    </div>
                    {/*///////////////////////////////////////////*/}
                    <div className={styles.factsBlock}>
                        <p className={styles.factTitle}>
                            Simplicity based on Innovation
                        </p>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>The app's management is intuitive and user-friendly.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>Find the video streams you need on the map or through intelligent search.</p>
                        </div>
                        <div className={styles.fact}>
                            <img src={"/images/factArrow.svg"}/>
                            <p>The video stream rating system will not leave you indifferent to the broadcasted content.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.learnMore}>
                <p className={styles.learnTitle}>You can learn more
                    about Volve Vision from lightpaper</p>
                <GradientButton text={'get more information'} onClick={()=>handleDownload('/documents/LightPaper eng.pdf')}/>

            </div>
            <DownloadBlock/>
        </div>
    );
};

export default About;
