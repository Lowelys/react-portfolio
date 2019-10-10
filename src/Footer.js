import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.blockTitle}>Sergey Belov</span>
        <div className={styles.socialBlock}>
          <div className={styles.socialIcon}></div>
          <div className={styles.socialIcon}></div>
          <div className={styles.socialIcon}></div>
          <div className={styles.socialIcon}></div>
        </div>
        <span className={styles.copyright}>@Есть все права</span>
      </div>
    </div>
  );
}

export default Footer;
