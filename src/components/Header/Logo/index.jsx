import React from 'react';

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src='/img/headerLogo.png' width={40} height={40} alt='logo'/>
      <div className={styles.headerInfo}>
        <h3>React Sneakers</h3>
        <p>Магазин лучших кросовок</p>
      </div>
    </div>
  );
};

export default Logo;