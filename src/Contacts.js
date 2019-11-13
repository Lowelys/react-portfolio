import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "./BlockTitle";
import Fade from 'react-reveal/Fade';


function Contacts() {
    return (
        <div className={styles.contacts}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={'Контакты'}/>
                    <form className={styles.formWrapper}>
                        <input className={styles.formArea} placeholder='Имя' type='text'></input>
                        <input className={styles.formArea} placeholder='e-mail' type='email'></input>
                        <textarea className={styles.messageArea} placeholder='Сообщение'></textarea>
                        <button className={styles.btnSubmit} type='submit'>Отправить</button>

                    </form>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
  