import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "../Skills/BlockTitle/BlockTitle";
import telegramIcon from '../assets/img/telegram2.svg';
import facebookIcon from '../assets/img/facebook.svg';
import linkedinIcon from '../assets/img/linkedin.svg';
import vkIcon from '../assets/img/vk.svg';
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={'Сергей Белов'}/>
                    <div className={styles.socialBlock}>

                        <div className={styles.socialIcon}>
                            <a href=''>
                                <img src={telegramIcon} alt=''/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href=''>
                                <img src={facebookIcon} alt=''/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href=''>
                                <img src={linkedinIcon} alt=''/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href=''>
                                <img src={vkIcon} alt=''/>
                            </a>
                        </div>
                    </div>
                    <span className={styles.copyright}>@2019 Есть все права</span>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
