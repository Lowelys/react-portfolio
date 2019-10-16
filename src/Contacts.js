import React from 'react';
import styles from'./Contacts.module.css';
import { placeholder } from '@babel/types';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <span className={styles.blockTitle}>Контакты</span>
        <form className={styles.formWrapper}>
           <input className={styles.formArea} placeholder='Имя' type='text'></input>
           <input className={styles.formArea} placeholder='e-mail' type='email'></input>
           <textarea className={styles.messageArea} placeholder='Сообщение'></textarea>
           <button className={styles.btnSubmit} type='submit'>Отправить</button>

        </form>
      </div>


    </div>
  );
}

export default Contacts;
  