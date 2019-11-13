import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={'Рассматриваю варианты работы'}/>
                    <a className={styles.btnShow} href={''}>Нанять меня</a>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
