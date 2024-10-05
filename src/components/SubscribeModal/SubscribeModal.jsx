import React, {useState} from 'react';
import styles from "./SubscribeModal.module.css"
import Modal from 'react-modal';
import GradientButton from "../GradientButton/GradientButton";
import SuccessSendModal from "./SuccessSendModal";

const SubscribeModal = ({isOpen, setIsOpen}) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const customStyles = {
        overlay: {
            zIndex: 1001,
            background: 'rgba(13, 26, 54, 0.95)',
            // backdropFilter: 'blur(10px)'
        },
        content: {
            top: window.innerWidth > 500 ? '50%' : '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 20,
            background: 'transparent',
            borderRadius: 30,
            borderWidth: 0,
            maxWidth: 600,
            width: '100%'
        },
    };

    function isValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const send = () => {
        if (isValidEmail()){
            setError('')
            setSuccess(true)
        }else setError('Invalid email')
    }
    return (
        <Modal
            isOpen={isOpen}

            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <div className={styles.modal}>

                {success?<SuccessSendModal setIsOpen={setIsOpen}/>:
                    <>
                        <img src={"images/close.svg"} className={styles.close} onClick={() => setIsOpen(false)}/>
                <p className={styles.title}>Send us<br/> your email</p>
                <p className={styles.text}>And we will send you an offer</p>
                <input placeholder={'example@gmail.com'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p style={{color:'red'}}>{error}</p>
                <GradientButton text={'Send!'} className={styles.button} onClick={send}/>
                    </>}
            </div>
        </Modal>
    );
};

export default SubscribeModal;
