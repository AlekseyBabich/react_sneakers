import React from 'react';

import styles from './GreenBtn.module.scss'

const GreenBtn = ({ name, onClickBtn }) => {
  return (
    <div>
      <button className={styles.greenButton} onClick={onClickBtn}>
        <p>{name}</p>
        <img src="/img/arrow.svg" alt="arrow" width={ 13 } height={ 12 }/>
      </button>
    </div>
  );
};

export default GreenBtn;